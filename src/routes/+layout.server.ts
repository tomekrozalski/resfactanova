import { BYPASS_TOKEN } from '$env/static/private';
import getRandomArticle from '$lib/db/layout/getRandomArticle';
import getPagesBasics from '$lib/db/layout/getPagesBasics';

export const config = {
	isr: {
		expiration: false,
		bypassToken: BYPASS_TOKEN
	}
};

export const load = async () => {
	const pages = await getPagesBasics();

	return {
		pages,
		streamed: {
			randomArticle: getRandomArticle()
		}
	};
};
