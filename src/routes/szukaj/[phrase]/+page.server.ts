import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';

export const load = async ({ params }) => {
	const phrase = params.phrase;

	if (!phrase) {
		throw error(404, 'Incorrect param');
	}

	const searchResponse = await contentfulFetch(/* GraphQL */);

	if (!searchResponse.ok) {
		throw error(404, { message: 'Searching in Contentful database failed' });
	}

	return { test: true };
};
