import type { RawBookTypes, FormattedBookTypes } from './Book.d';

const formatBook =
	(number: number) =>
	({
		isResFactaNova,
		notes,
		resFactaNovaNumber,
		resFactaNumber,
		year
	}: RawBookTypes): FormattedBookTypes => ({
		isActive: resFactaNumber === number,
		...(resFactaNumber === number && notes && { notes: notes }),
		...(isResFactaNova && resFactaNovaNumber && { resFactaNovaNumber: resFactaNovaNumber }),
		resFactaNumber,
		year
	});

export default formatBook;
