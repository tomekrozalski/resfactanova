import { findArticleByDocPath } from './find-article-by-doc-path';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';

const redis = await createClient({ url: REDIS_URL }).connect();

function extractGoogleDriveFileId(url: string): string | null {
	const match = url.match(/\/d\/([a-zA-Z0-9-_]+)/);
	return match ? match[1] : null;
}

export async function GET({ params }) {
	const { folder, filename } = params;
	const docPath = folder ? `/${folder}/${filename}` : `/${filename}`;

	const REDIS_KEY = `doc-url:${docPath}`;
	const cachedUrl = await redis.get(REDIS_KEY);

	let customDocUrl: string | null;

	if (cachedUrl) {
		customDocUrl = cachedUrl;
	} else {
		customDocUrl = await findArticleByDocPath(docPath);

		if (customDocUrl) {
			await redis.set(REDIS_KEY, customDocUrl, { EX: 3600 }); // Cache na 1h
		}
	}

	if (!customDocUrl) {
		console.log('No article found with this docPath');
		return new Response('File not found', { status: 404 });
	}

	const fileId = extractGoogleDriveFileId(customDocUrl);

	if (!fileId) {
		console.error('Could not extract file ID from URL:', customDocUrl);
		return new Response('Invalid file URL', { status: 500 });
	}

	const downloadUrl = `https://drive.google.com/uc?id=${fileId}&export=download`;

	try {
		const response = await fetch(downloadUrl);

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
