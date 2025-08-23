import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import getArticlesByAuthor from './utils/getArticlesByAuthor';
import getAuthor from './utils/getAuthor.js';
import formatArticle from '$lib/templates/ArticleItem/formatArticle';
import type { FormattedArticleTypes } from '$lib/templates/ArticleItem/Article.d';
import type { FormattedAuthorTypes } from './utils/Author.d';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';

const redis = await createClient({ url: REDIS_URL }).connect();

export const load = async ({ params }) => {
	const slug = params.slug;

	if (!slug) {
		throw error(404, 'Incorrect param');
	}

	const REDIS_KEY = 'author' + ':' + slug;
	const cache = await redis.get(REDIS_KEY);

	if (cache) {
		return JSON.parse(cache);
	}

	const authorResponse = await contentfulFetch(getAuthor(slug));
	const articlesResponse = await contentfulFetch(getArticlesByAuthor(slug));

	if (!authorResponse.ok || !articlesResponse.ok) {
		throw error(404, { message: 'Getting articles by author slug failed' });
	}

	const authorData = await authorResponse.json();
	const author = authorData?.data?.authorCollection?.items?.[0] as FormattedAuthorTypes;

	const articlesData = await articlesResponse.json();
	const articles = articlesData?.data?.articleCollection?.items;

	if (!author || !articles?.length) {
		throw error(404, { message: 'Getting articles by author. No data' });
	}

	const formattedArticles: FormattedArticleTypes[] = articles.map(formatArticle);

	const data = {
		articles: formattedArticles,
		author,
		pageName: 'archiwum'
	};

	await redis.set(REDIS_KEY, JSON.stringify(data));

	return data;
};
