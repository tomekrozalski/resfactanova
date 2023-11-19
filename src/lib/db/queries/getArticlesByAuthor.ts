type GetArticlesByAuthorQueryTypes = {
	slug: string;
};

const getArticlesByAuthor = ({ slug }: GetArticlesByAuthorQueryTypes) => `
  {
    articleCollection(order: sys_firstPublishedAt_ASC, where: { authors: { slug: "${slug}" }}) {
      items {
        abstract
        authorsCollection {
          items {
            fullName
            slug
          }
        }
        book {
          resFactaNumber
          isResFactaNova
          resFactaNovaNumber
          notes
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

export default getArticlesByAuthor;
