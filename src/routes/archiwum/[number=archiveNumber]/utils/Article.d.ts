export type RawArticleTypes = {
	abstract?: string;
	authorsCollection?: {
		items: {
			fullName: string;
			slug: string;
		}[];
	};
	customDocPath: string;
	customDocUrl: string;
	pdf?: {
		url: string;
	};
	title: string;
};

export type FormattedArticleTypes = {
	abstract?: string;
	authors?: {
		fullName: string;
		slug: string;
	}[];
	pdf?: string;
	title: string;
};
