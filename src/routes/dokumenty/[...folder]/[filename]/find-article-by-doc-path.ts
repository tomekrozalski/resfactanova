import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '$env/static/private';

export async function findArticleByDocPath(docPath: string): Promise<string | null> {
	const query = `
    {
      articleCollection(limit: 1, where: { customDocPath: "${docPath}" }) {
        items {
          customDocUrl
          title
        }
      }
    }
  `;

	const response = await fetch(
		`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`
			},
			body: JSON.stringify({ query })
		}
	);

	const data = await response.json();
	const article = data?.data?.articleCollection?.items?.[0];

	return article?.customDocUrl || null;
}
