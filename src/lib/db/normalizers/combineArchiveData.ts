import type { BookTypes } from '../queries/getBooksQuery';
import type { BookArticleListTypes, BookArticleTypes } from '../queries/getBookArticlesQuery';

export type CombinedArchiveData = {
	articles: {
		authors?: {
			fullName: string;
			slug: string;
		}[];
		title: string;
	}[];
	resFactaNumber: number;
	year: number;
};

const formatArticle = ({ authorsCollection, title }: BookArticleTypes) => ({
	authors: authorsCollection?.items,
	title
});

const combineArchiveData = (
	oldBooksList: BookTypes[],
	articles: BookArticleListTypes[]
): CombinedArchiveData[] =>
	oldBooksList.map((book) => {
		const currArticlesData = articles.find(
			({ resFactaNumber }) => resFactaNumber === book.resFactaNumber
		);

		return {
			...book,
			articles: currArticlesData?.articlesCollection?.items?.map(formatArticle) ?? []
		};
	});

export default combineArchiveData;
