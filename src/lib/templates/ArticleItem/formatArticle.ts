import type { RawArticleTypes, FormattedArticleTypes } from './Article.d';

const formatArticle = ({
	abstract,
	authorsCollection,
	book,
	pdf,
	title
}: RawArticleTypes): FormattedArticleTypes => ({
	...(abstract && { abstract }),
	...(authorsCollection?.items?.length && {
		authors: authorsCollection.items
	}),
	book,
	...(pdf?.url && { pdf: pdf.url }),
	title
});

export default formatArticle;
