type GetBookArticlesQueryTypes = {
	resFactaNumber: number;
};

export type BookArticleTypes = {
	authorsCollection?: {
		items: {
			fullName: string;
			slug: string;
		}[];
	};
	title: string;
};

export type BookArticleListTypes = {
	articlesCollection: {
		items: BookArticleTypes[];
	};
	resFactaNumber: number;
};

const getBookArticlesQuery = ({ resFactaNumber }: GetBookArticlesQueryTypes) => `
  {
    bookCollection(limit: 1, where: { resFactaNumber: ${resFactaNumber} }) {
      items {
        resFactaNumber
        articlesCollection {
          items {
            title
            authorsCollection {
              items {
                fullName
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export default getBookArticlesQuery;
