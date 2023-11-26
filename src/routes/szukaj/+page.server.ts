import { error, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const search = data.get('search') as string;

		if (!search || search.length < 2) {
			throw error(404, { message: 'Search failed. Incorrect input data' });
		}

		throw redirect(302, '/szukaj/' + search);
	}
};

export const load = () => {
	throw redirect(302, '/');
};
