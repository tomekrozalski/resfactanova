import { error } from '@sveltejs/kit';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import getPageBySlug from '$lib/db/layout/getPageBySlug';
import renderOptions from '$lib/db/layout/renderOptions';

export const config = {
	isr: {
		expiration: 60
	}
};

export const load = async ({ params }) => {
	const pageParam = params?.page;

	if (!pageParam) {
		throw error(404, { message: 'Missing page param' });
	}

	const page = await getPageBySlug(pageParam);

	return {
		...(page.content && {
			content: documentToHtmlString(page.content.json, renderOptions(page.content.links))
		}),
		pageName: pageParam,
		title: page.title
	};
};
