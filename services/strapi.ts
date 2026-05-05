const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

interface VariablesProps {
  slug?: string;
  categoria?: string | null;
}

export async function getPage(slug: string, categoria?: string) {
  const query = `
    query GetPage($slug: String!) {
      pages(filters: {
        slug: { eq: $slug }
      }) {
        documentId
        slug
        categoria
        seo {
          titulo
          descricao
          ogImage { url }
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

  const variables: VariablesProps = {
    slug
  };

  const res = await fetch(`${baseUrl}/graphql`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
      const text = await res.text(); // lê como texto pra debug
      console.error("HTTP Error:", res.status, text);
      return null;
    }

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    return null;
  }

  return json.data?.pages?.[0] ?? null;
}

export async function getPageCategory(categoria?: string) {
  const query = `
    query GetPage($categoria: String) {
      pages(filters: {
        categoria: { eq: $categoria }
      }) {
        documentId
        slug
        categoria
        seo {
          titulo
          descricao
          ogImage { url }
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

  const variables: VariablesProps = {
    categoria: categoria ?? null,
  };

  const res = await fetch(`${baseUrl}/graphql`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
      const text = await res.text(); // lê como texto pra debug
      console.error("HTTP Error:", res.status, text);
      return null;
    }

  const json = await res.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    return null;
  }

  return json.data?.pages?.[0] ?? null;
}

async function safeFetch(query: string, variables?: VariablesProps) {
  const res = await fetch(`${baseUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
      const text = await res.text(); // lê como texto pra debug
      console.error("HTTP Error:", res.status, text);
      return null;
    }

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
        links {
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
      header {
        logo {
          url
        }
        linksMenu {
          label
          url
        }
      }
    }`;

  const data = await safeFetch(query);

  return data?.header;
}