import { error } from '@sveltejs/kit';
import contentfulFetch from '$lib/db/contentful-fetch';
import getBooksQuery from '$lib/db/queries/getBooksQuery';
import getBookArticlesQuery from '$lib/db/queries/getBookArticlesQuery';
import combineArchiveData from '$lib/db/normalizers/combineArchiveData';
import type { BookTypes } from '$lib/db/queries/getBooksQuery';

export const load = async () => {
	const oldBooks = await contentfulFetch(getBooksQuery({ isResFactaNova: false }));

	if (!oldBooks.ok) {
		throw error(404, { message: 'Res Facta book not found' });
	}

	const oldBooksData = await oldBooks.json();
	const oldBooksList = oldBooksData?.data?.bookCollection?.items;

	if (!oldBooksList?.length) {
		throw error(404, { message: 'Res Facta book items not found' });
	}

	const articles = await Promise.all(
		oldBooksList.map(({ resFactaNumber }: BookTypes) =>
			contentfulFetch(getBookArticlesQuery({ resFactaNumber }))
				.then((response) => response.json())
				.then(({ data }) => data.bookCollection.items[0])
		)
	);

	return { archive: combineArchiveData(oldBooksList, articles) };
};
