import type { RawArticleTypes, FormattedArticleTypes } from './Article.d';

const formatArticle = ({
	abstract,
	authorsCollection,
	pdf,
	title
}: RawArticleTypes): FormattedArticleTypes => {
	function getPdfUrl() {
		if (!pdf) {
			return null;
		}

		if (pdf.description) {
			return '/dokumenty' + pdf.description;
		}

		if (pdf.url) {
			return pdf.url;
		}

		return null;
	}

	const pdfUrl = getPdfUrl();

	return {
		...(abstract && { abstract }),
		...(authorsCollection?.items?.length && {
			authors: authorsCollection.items
		}),
		...(pdfUrl && { pdf: pdfUrl }),
		title
	};
};

export default formatArticle;
