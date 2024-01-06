import getRandomArticle from '$lib/db/layout/getRandomArticle';
import getPagesBasics from '$lib/db/layout/getPagesBasics';

export const load = async () => {
	const pages = await getPagesBasics();

	return {
		pages,
		streamed: {
			randomArticle: getRandomArticle()
		}
	};
};
