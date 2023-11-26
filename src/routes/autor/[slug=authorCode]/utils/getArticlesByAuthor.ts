const getArticlesByAuthor = (slug: string) => `
  {
    articleCollection(order: sys_firstPublishedAt_ASC, where: { authors: { slug: "${slug}" }}) {
      items {
        abstract
        authorsCollection(limit: 10) {
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
