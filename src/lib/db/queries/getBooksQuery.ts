type GetBooksQueryTypes = {
	isResFactaNova: boolean;
};

export type BookTypes = {
	resFactaNumber: number;
	year: number;
};

const getBooksQuery = ({ isResFactaNova }: GetBooksQueryTypes) => `
  {
    bookCollection(order: resFactaNumber_ASC, where: { isResFactaNova: ${isResFactaNova} }) {
      items {
        resFactaNumber
        year
      }
    }
  }
`;

export default getBooksQuery;
