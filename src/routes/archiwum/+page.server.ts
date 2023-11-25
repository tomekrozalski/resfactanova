import { error, redirect } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';

export const load = async () => {
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

	throw redirect(302, '/archiwum/' + lastNumber);
};
