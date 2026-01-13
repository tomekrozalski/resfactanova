import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '$env/static/private';

export async function findMediaByDocPath(docPath: string): Promise<string | null> {
	const query = `
		{
			assetCollection(limit: 1, where: { description_contains: "${docPath}" }) {
				items {
					description
					title
					url
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
	const asset = data?.data?.assetCollection?.items?.[0];

	return asset?.url || null;
}
