import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import getPageBySlug from '$lib/db/layout/getPageBySlug';
import getArticleList from './utils/getArticleList';
import getBookList from './utils/getBookList';
import formatArticle from './utils/formatArticle';
import formatBook from './utils/formatBook';
import type { FormattedBookTypes } from './utils/Book.d';
import type { FormattedArticleTypes } from './utils/Article.d';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';

const redis = await createClient({ url: REDIS_URL }).connect();

export const load = async ({ params }) => {
	const number = params.number;

	if (!number) {
		throw error(404, 'Incorrect param');
	}

	const REDIS_KEY = 'book' + ':' + number;
	const cache = await redis.get(REDIS_KEY);

	if (cache) {
		return JSON.parse(cache);
	}

	const booksResponse = await contentfulFetch(getBookList());
	const articleResponse = await contentfulFetch(getArticleList(Number(number)));

	if (!booksResponse.ok || !articleResponse.ok) {
		throw error(404, { message: 'Getting articles from Contentful failed' });
	}

	const booksData = await booksResponse.json();
	const books = booksData?.data?.bookCollection?.items;

	const articlesData = await articleResponse.json();
	const articles = articlesData?.data?.articleCollection?.items ?? [];

	if (!books?.length) {
		throw error(404, { message: 'Getting articles from Contentful. No data' });
	}

	const formattedBooks: FormattedBookTypes[] = books.map(formatBook(Number(number)));
	const formattedArticles: FormattedArticleTypes[] = articles.map(formatArticle);

	const page = await getPageBySlug('archiwum');

	const data = {
		articles: formattedArticles,
		books: formattedBooks,
		pageName: 'archiwum',
		title: page.title as string
	};

	await redis.set(REDIS_KEY, JSON.stringify(data));

	return data;
};
