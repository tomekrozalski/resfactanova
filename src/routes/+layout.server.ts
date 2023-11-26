import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import formatArticle from '$lib/templates/ArticleItem/formatArticle';
import type { FormattedArticleTypes } from '$lib/templates/ArticleItem/Article.d';

export const load = async () => {
	const totalResponse = await contentfulFetch(`
    {
      articleCollection(where: { pdf_exists: true }) {
        total
      }
    }
  `);

	if (!totalResponse.ok) {
		throw error(404, { message: 'Getting count of all articles failed' });
	}

	const totalData = await totalResponse.json();
	const total = totalData?.data?.articleCollection?.total;

	if (!total || Number.isNaN(total)) {
		throw error(404, { message: 'Getting count of all articles failed' });
	}

	const skip = Math.floor(Math.random() * total);

	const articleResponse = await contentfulFetch(`
    {
      articleCollection (limit: 1, skip: ${skip}, where: { pdf_exists: true }) {
        items {
          abstract
          authorsCollection(limit: 10) {
            items {
              fullName
              slug
            }
          }
          book {
            resFactaNumber
            isResFactaNova
            resFactaNovaNumber
            notes
            year
          }
          pdf {
            url
          }
          title
        }
      }
    }
  `);

	if (!articleResponse.ok) {
		throw error(404, { message: 'Getting random article failed' });
	}

	const articleData = await articleResponse.json();
	const article = articleData?.data?.articleCollection?.items?.[0];

	if (!article) {
		throw error(404, { message: 'Getting random article failed' });
	}

	const formattedArticle: FormattedArticleTypes = formatArticle(article);

	return { randomArticle: formattedArticle };
};
