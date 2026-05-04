const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getPage(slug: string, categoria?: string) {
  const query = `
    query GetPage($slug: String!, $categoria: String) {
      pages(
        filters: {
          slug: { eq: $slug }
          ${categoria ? "categoria: { eq: $categoria }" : ""}
        }
      ) {
        documentId
        slug
        categoria
        seo {
          titulo
          descricao
          ogImage {
            url
          }
        }
        body {
          __typename

          ... on ComponentSectionsHeroBannerSection {
            id
            heroTitulo: titulo
            subtitulo
            textoCta
            urlCta
            imagemFundo {
              url
            }
            ativo
          }

          ... on ComponentSectionsSolucoes {
            id
            ctaTitulo: titulo
            cardSolucao {
              nome
              descricaoBreve
              descricaoCompleta
              beneficios {
                texto
              }
              publicoAlvo
              icone {
                url
              }
              botoes {
                textoBotao
                urlBotao
              }
              destaque
            }
          }

          ... on ComponentSectionsDepoimentos {
            id
            depoimentos {
              nomeAutor
              cargoEmpresa
              texto
              avaliacao
              foto {
                url
              }
            }
          }

          ... on ComponentSectionsCta {
            id
            titulo
            descricao
            textoBotao
            urlBotao
          }

          ... on ComponentSectionsEducacaoHero {
            id
            titulo
            descricao
            icone {
              url
            }
            publicoAlvo
          }

          ... on ComponentSectionsBeneficiosSecao {
            id
            titulo
            descricao
            beneficios {
              texto
            }
          }
        }
      }
    }
  `;

  const res = await fetch(`${baseUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        slug,
        ...(categoria ? { categoria } : {}),
      },
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    return null;
  }

  const page = json.data?.pages?.[0];

  if (!page) {
    console.error("No page found:", json);
    return null;
  }

  return page;
}

async function safeFetch(query: string, variables?: any) {
  const res = await fetch(`${baseUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Error:", json.errors);
    return null;
  }

  return json.data ?? null;
}

export async function getFooter() {
  const query = `
    query GetFooter {
      footer {
        logo {
          url
        }
        copyright
        socialLink {
          socialNetwork
          url
        }
        link {
          label
          url
        }
      }
    }`;

  const data = await safeFetch(query);

  return data?.footer ?? null;
}

export async function getHeader() {
  const query = `
    query GetHeader {
      menu {
        logo {
          url
        }
        menu {
          label
          url
        }
      }
    }`;

  const data = await safeFetch(query);

  return data?.menu ?? null;
}