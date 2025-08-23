import { createClient } from 'redis';
import { PRERENDER_REVALIDATE_KEY, REDIS_URL } from '$env/static/private';

const redis = await createClient({ url: REDIS_URL }).connect();

export async function POST({ request }) {
	const headers = await request.headers;
	const key = headers.get('x-prerender-revalidate');

	if (key !== PRERENDER_REVALIDATE_KEY) {
		return new Response('Invalid key', { status: 401 });
	}

	await redis.flushAll();

	return new Response(undefined, { status: 204 });
}
