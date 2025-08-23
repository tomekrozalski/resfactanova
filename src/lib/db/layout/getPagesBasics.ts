import { createClient } from 'redis';
import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import { REDIS_URL } from '$env/static/private';

type PageBasicsTypes = {
	menuName: string;
	slug?: string;
};

const redis = await createClient({ url: REDIS_URL }).connect();

const getPagesBasics = async () => {
	const REDIS_KEY = 'pages-basics';
	const cache = await redis.get(REDIS_KEY);

	if (cache) {
		return JSON.parse(cache);
	}

	const pagesResponse = await contentfulFetch(`
    {
      pageCollection(order: order_ASC) {
        items {
          slug
          menuName
        }
      }
    }
  `);

	if (!pagesResponse.ok) {
		throw error(404, { message: 'Getting pages basics failed' });
	}

	const pagesData = await pagesResponse.json();
	const pages = pagesData?.data?.pageCollection?.items;

	if (!pages?.length) {
		throw error(404, { message: 'Getting pages basics failed' });
	}

	const formattedPages: PageBasicsTypes[] = pages.map(({ menuName, slug }: PageBasicsTypes) => ({
		menuName,
		...(slug && { slug })
	}));

	await redis.set(REDIS_KEY, JSON.stringify(formattedPages));

	return formattedPages;
};

export default getPagesBasics;
