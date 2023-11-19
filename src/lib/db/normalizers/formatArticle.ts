import type { ArticleTypes } from '../queries/getArticles';

export type FormattedArticleTypes = {
	abstract?: string;
	authors?: {
		fullName: string;
		slug: string;
	}[];
	book: {
		isResFactaNova: boolean;
		notes?: string;
		resFactaNovaNumber?: number;
		resFactaNumber: number;
		year: number;
	};
	pdf?: string;
	title: string;
};

const formatArticle = ({
	abstract,
	authorsCollection,
	book,
	pdf,
	title
}: ArticleTypes): FormattedArticleTypes => {
	return {
		...(abstract && { abstract }),
		...(authorsCollection?.items?.length && {
			authors: authorsCollection.items
		}),
		book,
		...(pdf?.url && { pdf: pdf.url }),
		title
	};
};

export default formatArticle;
