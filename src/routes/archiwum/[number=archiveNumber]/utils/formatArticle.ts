import type { RawArticleTypes, FormattedArticleTypes } from './Article.d';

const formatArticle = ({
	abstract,
	authorsCollection,
	customDocPath,
	customDocUrl,
	pdf,
	title
}: RawArticleTypes): FormattedArticleTypes => {
	function getPdfUrl() {
		if (customDocPath && customDocUrl) {
			return '/dokumenty' + customDocPath;
		}

		if (pdf?.url) {
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
