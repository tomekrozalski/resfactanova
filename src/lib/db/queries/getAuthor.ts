const getAuthor = (slug: string) => `
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
