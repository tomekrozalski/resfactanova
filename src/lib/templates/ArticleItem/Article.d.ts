export type RawArticleTypes = {
	abstract?: string;
	authorsCollection?: {
		items: {
			fullName: string;
			slug: string;
		}[];
	};
	book: {
		isResFactaNova: boolean;
		notes?: string;
		resFactaNovaNumber?: number;
		resFactaNumber: number;
		year: number;
	};
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
