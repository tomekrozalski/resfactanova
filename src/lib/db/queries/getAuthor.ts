type GetAuthorQueryTypes = {
	slug: string;
};

const getAuthor = ({ slug }: GetAuthorQueryTypes) => `
  {
    authorCollection(limit: 1, where: { slug: "${slug}" }) {
      items {
        firstName
        lastName
        notes
      }
    }
  }
`;

export default getAuthor;
