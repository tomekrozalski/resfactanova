import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';

const redis = await createClient({ url: REDIS_URL }).connect();

const getPageBySlug = async (slug: string) => {
	const REDIS_KEY = 'page-by-slug' + ':' + (slug || 'main');
	const cache = await redis.get(REDIS_KEY);

	if (cache) {
		return JSON.parse(cache);
	}

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

	if (!page?.title) {
		throw error(404, { message: 'Page title or page content is empty' });
	}

	await redis.set(REDIS_KEY, JSON.stringify(page));

	return page;
};

export default getPageBySlug;
