import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';

type PageBasicsTypes = {
	menuName: string;
	slug?: string;
};

const getPagesBasics = async () => {
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

	return formattedPages;
};

export default getPagesBasics;
