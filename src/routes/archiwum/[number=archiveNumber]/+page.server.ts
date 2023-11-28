import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import getArticleList from './utils/getArticleList';
import getBookList from './utils/getBookList';
import formatArticle from './utils/formatArticle';
import formatBook from './utils/formatBook';
import type { FormattedBookTypes } from './utils/Book.d';
import type { FormattedArticleTypes } from './utils/Article.d';

export const load = async ({ params }) => {
	const number = params.number;

	if (!number) {
		throw error(404, 'Incorrect param');
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

	return { articles: formattedArticles, books: formattedBooks, pageName: 'archiwum' };
};
