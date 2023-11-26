import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import getArticlesByAuthor from './utils/getArticlesByAuthor';
import getAuthor from './utils/getAuthor.js';
import formatArticle from './utils/formatArticle';
import type { FormattedArticleTypes } from '$lib/templates/ArticleItem/Article.d';
import type { FormattedAuthorTypes } from './utils/Author.d';

export const load = async ({ params }) => {
	const slug = params.slug;

	if (!slug) {
		throw error(404, 'Incorrect param');
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

	return {
		articles: formattedArticles,
		author
	};
};
