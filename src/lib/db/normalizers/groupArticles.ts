import type { FormattedArticleTypes } from './formatArticle';

type BookTypes = {
	articles: {
		abstract?: string;
		authors?: {
			fullName: string;
			slug: string;
		}[];
		pdf?: string;
		title: string;
	}[];
	notes?: string;
	resFactaNovaNumber?: number;
	resFactaNumber: number;
	year: number;
};

type GroupObjTypes = {
	[key: number]: BookTypes;
};

const groupArticles = (articles: FormattedArticleTypes[]): BookTypes[] => {
	const groupsObj = articles.reduce((acc: GroupObjTypes, { book, ...rest }) => {
		if (acc[book.resFactaNumber]) {
			acc[book.resFactaNumber].articles.push(rest);
		} else {
			acc[book.resFactaNumber] = {
				articles: [rest],
				...(book.notes && { notes: book.notes }),
				...(book.isResFactaNova &&
					book.resFactaNovaNumber && {
						resFactaNovaNumber: book.resFactaNovaNumber
					}),
				resFactaNumber: book.resFactaNumber,
				year: book.year
			};
		}

		return acc;
	}, {});

	return Object.values(groupsObj);
};

export default groupArticles;
