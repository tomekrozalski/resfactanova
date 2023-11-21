import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import getArticleByNumber from '$lib/db/queries/getArticleByNumber';
import formatArticle from '$lib/db/normalizers/formatArticle';
import groupArticles from '$lib/db/normalizers/groupArticles';

export const load = async ({ params }) => {
	const number = params.number;

	if (!number) {
		throw error(404, 'Incorrect param');
	}

	const response = await contentfulFetch(getArticleByNumber(Number(number)));

	if (!response.ok) {
		throw error(404, { message: 'Getting all articles from Contentful failed' });
	}

	const { data } = await response.json();
	const articles = data?.articleCollection?.items;

	if (!articles?.length) {
		throw error(404, { message: 'Getting all articles from Contentful. No data' });
	}

	const formattedArticles = articles.map(formatArticle);
	const groupedArticles = groupArticles(formattedArticles);

	return { books: groupedArticles };
};
