import { findMediaByDocPath } from './find-media-by-doc-path';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';

const redis = await createClient({ url: REDIS_URL }).connect();

export async function GET({ params }) {
	const { folder, filename } = params;
	const docPath = folder ? `/${folder}/${filename}` : `/${filename}`;

	const REDIS_KEY = `doc-url:${docPath}`;
	const cachedUrl = await redis.get(REDIS_KEY);

	let docUrl: string | null;

	if (cachedUrl) {
		docUrl = cachedUrl;
	} else {
		docUrl = await findMediaByDocPath(docPath);

		if (docUrl) {
			await redis.set(REDIS_KEY, docUrl, { EX: 3600 }); // Cache na 1h
		}
	}

	if (!docUrl) {
		console.log('No article found with this docPath');
		return new Response('File not found', { status: 404 });
	}

	try {
		const response = await fetch(docUrl);

		if (!response.ok) {
			console.error('Failed to fetch from Google Drive:', response.status);
			return new Response('File not found', { status: 404 });
		}

		return new Response(response.body, {
			status: 200,
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': `inline; filename="${filename}"`,
				'Cache-Control': 'public, max-age=3600'
			}
		});
	} catch (error) {
		console.error('Error fetching file:', error);
		return new Response('Error fetching file', { status: 500 });
	}
}
