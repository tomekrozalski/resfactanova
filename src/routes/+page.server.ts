import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import getPageBySlug from '$lib/db/layout/getPageBySlug';
import renderOptions from '$lib/db/layout/renderOptions';

export const load = async () => {
	const page = await getPageBySlug('');

	return {
		...(page.content && {
			content: documentToHtmlString(page.content.json, renderOptions(page.content.links))
		}),
		pageName: '',
		title: page.title
	};
};
