import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import formatArticle from '$lib/templates/ArticleItem/formatArticle';
import type { FormattedArticleTypes } from '$lib/templates/ArticleItem/Article.d';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';

const redis = await createClient({ url: REDIS_URL }).connect();

async function getArticlesCount(): Promise<number> {
	const REDIS_KEY = 'articles-count';
	const cache = await redis.get(REDIS_KEY);

	if (cache) {
		return cache;
	}

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

	await redis.set(REDIS_KEY, total);

	return total;
}

async function getArticlesListChunk(pageIndex: number) {
	const skip = pageIndex * 100;
	const articleResponse = await contentfulFetch(`
    {
      articleCollection (skip: ${skip}, limit: 100, where: { pdf_exists: true }) {
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
	const articles = articleData?.data?.articleCollection?.items;

	if (!articles?.length) {
		throw error(404, { message: 'Getting articles failed' });
	}

	return articles.map(formatArticle);
}

async function getAllArticlesData(count: number): Promise<FormattedArticleTypes[]> {
	const REDIS_KEY = 'articles-basic-data';
	const cache = await redis.get(REDIS_KEY);

	if (cache) {
		return JSON.parse(cache);
	}

	const pages = Math.ceil(count / 100);
	const allChunks = await Promise.all(
		Array(pages)
			.fill('')
			.map((_, pageIndex) => getArticlesListChunk(pageIndex))
	);

	const allArticles = allChunks.flat();
	await redis.set(REDIS_KEY, JSON.stringify(allArticles));

	return allArticles;
}

const getRandomArticle = async () => {
	const count = await getArticlesCount();
	const articles = await getAllArticlesData(count);
	const randomIndex = Math.floor(Math.random() * count);

	return articles[randomIndex];
};

export default getRandomArticle;
