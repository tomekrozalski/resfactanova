export type ArticleTypes = {
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

const getArticles = () => `
	{
		articleCollection(order: sys_firstPublishedAt_ASC) {
			items {
				abstract
				authorsCollection {
					items {
						fullName
						slug
					}
				}
				book {
					isResFactaNova
					notes
					resFactaNovaNumber
					resFactaNumber
					year
				}
				pdf {
					url
				}
				title
			}
		}
	}
`;

export default getArticles;
