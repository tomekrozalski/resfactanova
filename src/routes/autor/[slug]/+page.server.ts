import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import getArticlesByAuthor from '$lib/db/queries/getArticlesByAuthor';
import formatArticle from '$lib/db/normalizers/formatArticle';

export const load = async ({ params }) => {
	const slug = params.slug;

	if (!slug) {
		throw error(404, 'Incorrect param');
	}

	const response = await contentfulFetch(getArticlesByAuthor({ slug }));

	if (!response.ok) {
		throw error(404, { message: 'Getting articles by author slug failed' });
	}

	const { data } = await response.json();
	const articles = data?.articleCollection?.items;

	if (!articles?.length) {
		throw error(404, { message: 'Getting articles by author. No data' });
	}

	return {
		articles: articles.map(formatArticle)
	};
};
