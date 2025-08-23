import { error, redirect } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';

const redis = await createClient({ url: REDIS_URL }).connect();

export const load = async () => {
	const REDIS_KEY = 'last-book-number';
	const cache = await redis.get(REDIS_KEY);

	if (cache) {
		throw redirect(302, '/archiwum/' + cache);
	}

	const bookResponse = await contentfulFetch(`
		{
			bookCollection(limit: 1, order: resFactaNumber_DESC) {
				items {
					resFactaNumber
				}
			}
		}
	`);

	if (!bookResponse.ok) {
		throw error(404, { message: 'Getting last book number failed' });
	}

	const bookData = await bookResponse.json();
	const lastNumber = bookData?.data?.bookCollection?.items?.[0]?.resFactaNumber;

	if (!lastNumber) {
		throw redirect(302, '/archiwum/1');
	}

	await redis.set(REDIS_KEY, lastNumber);

	throw redirect(302, '/archiwum/' + lastNumber);
};
