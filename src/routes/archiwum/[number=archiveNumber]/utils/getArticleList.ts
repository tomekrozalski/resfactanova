const getArticlesByNumber = (number: number) => `
	{
		articleCollection(order: sys_publishedAt_ASC, where: { book: { resFactaNumber: ${number} }}) {
			items {
				abstract
				authorsCollection(limit: 10) {
					items {
						fullName
						slug
					}
				}
				pdf {
					url
				}
				title
			}
		}
	}
`;

export default getArticlesByNumber;
