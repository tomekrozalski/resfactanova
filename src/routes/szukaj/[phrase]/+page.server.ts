import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import formatArticle from './utils/formatArticle';
import type { FormattedArticleTypes } from './utils/Article.d';

export const load = async ({ params }) => {
	const phrase = params.phrase;

	if (!phrase) {
		throw error(404, 'Incorrect param');
	}

	const searchResponse = await contentfulFetch(`
		{
			articleCollection (where: { OR: [
				{ title_contains: "${phrase}" },
				{ abstract_contains: "${phrase}" },
				{ authors: { fullName_contains: "${phrase}" }}
			]}) {
				items {
					abstract
					authorsCollection(limit: 10) {
						items {
							fullName
							slug
						}
					}
					pdf {
						url
					}
					title
				}
			}
		}
	`);

	if (!searchResponse.ok) {
		throw error(404, { message: 'Searching in Contentful database failed' });
	}

	const articlesData = await searchResponse.json();
	const articles = articlesData?.data?.articleCollection?.items;

	if (!articles?.length) {
		return { articles: [] };
	}

	const formattedArticles: FormattedArticleTypes[] = articles.map(formatArticle);

	return { articles: formattedArticles };
};
