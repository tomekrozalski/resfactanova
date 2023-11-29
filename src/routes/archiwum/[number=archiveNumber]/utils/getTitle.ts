import type { FormattedBookTypes } from './Book.d';

const getTitle = (title: string, books: FormattedBookTypes[]) => {
	const currentBook = books.find(({ isActive }) => isActive);

	if (!currentBook) {
		return title;
	}

	const { resFactaNovaNumber, resFactaNumber, year } = currentBook;

	if (resFactaNovaNumber) {
		return `${title}, ${resFactaNovaNumber} (${resFactaNumber}) ${year}`;
	}

	return `${title}, ${resFactaNumber} (${year})`;
};

export default getTitle;
