import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import type { Document } from '@contentful/rich-text-types';

type RawPageTypes = {
	content?: {
		json: Document;
	};
	title: string;
};

type FormattedPageTypes = {
	content?: Document;
	title: string;
};

// const formatPage = ({ content, title }: RawPageTypes): FormattedPageTypes => ({
// 	...(content?.json ? { content: content.json } : {}),
// 	...(content?.links ? { content: content.links } : {}),
// 	title
// });

const getPageBySlug = async (slug: string) => {
	const pageResponse = await contentfulFetch(`
    {
      pageCollection(limit: 1, where: { isMainPage: true }) {
        items {
          title
          content {
            json
            links {
              entries {
                block {
                  sys {
                    id
                  }
                  __typename
                  ... on YouTube {
                    id
                  }
                }
              }
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                  description
                }
              }
            }
          }
        }
      }
    }

  `);

	if (!pageResponse.ok) {
		throw error(404, { message: 'Getting page data failed' });
	}

	const pageData = await pageResponse.json();
	const page = pageData?.data?.pageCollection?.items?.[0];

	if (!page.title || !page.content) {
		throw error(404, { message: 'Getting page data failed' });
	}

	return page;
};

export default getPageBySlug;
