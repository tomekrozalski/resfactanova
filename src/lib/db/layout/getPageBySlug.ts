import { error, redirect } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';

const getPageBySlug = async (slug: string) => {
	const whereQuery = slug ? `slug: "${slug}"` : 'isMainPage: true';

	const pageResponse = await contentfulFetch(`
    {
      pageCollection(limit: 1, where: { ${whereQuery} }) {
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
		throw error(404, { message: 'Getting page data failed1' });
	}

	const pageData = await pageResponse.json();
	const page = pageData?.data?.pageCollection?.items?.[0];

	if (!page) {
		throw error(404, { message: 'Not found' });
	}

	if (!page?.title || !page.content) {
		throw error(404, { message: 'Page title or page content is empty' });
	}

	return page;
};

export default getPageBySlug;
