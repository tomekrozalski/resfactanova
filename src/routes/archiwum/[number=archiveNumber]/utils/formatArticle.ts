import type { RawArticleTypes, FormattedArticleTypes } from './Article.d';

const formatArticle = ({
	abstract,
	authorsCollection,
	pdf,
	title
}: RawArticleTypes): FormattedArticleTypes => {
	return {
		...(abstract && { abstract }),
		...(authorsCollection?.items?.length && {
			authors: authorsCollection.items
		}),
		...(pdf?.url && { pdf: pdf.url }),
		title
	};
};

export default formatArticle;
