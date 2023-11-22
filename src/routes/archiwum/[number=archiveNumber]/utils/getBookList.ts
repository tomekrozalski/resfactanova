const getBookList = () => `
	{
		bookCollection(order: resFactaNumber_ASC) {
			items {
				isResFactaNova
				notes
				resFactaNovaNumber
				resFactaNumber
				year
			}
		}
	}
`;

export default getBookList;
