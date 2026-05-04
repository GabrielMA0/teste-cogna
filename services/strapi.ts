const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getPage(slug: string, categoria?: string) {
  const query = `
    query GetPage($slug: String! ${categoria ? ", $categoria: String!" : ""}) {
  pages(filters: { slug: { eq: $slug } ${categoria ? ", categoria: { eq: $categoria }" : ""} }) {
    documentId
    slug
    categoria
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

      ... on ComponentSectionsEducacaoHero{
        id
        titulo
        descricao
        icone {
          url
        }
        publicoAlvo
      }

      ... on ComponentSectionsBeneficiosSecao{
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
  `

  const res = await fetch(`${baseUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { slug, categoria },
    }),
  })

  const json = await res.json()

   if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    return null;
  }

  if (!json.data?.pages) {
    console.error("No data returned:", json);
    return null;
  }

  return json.data.pages[0] ?? null;
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
    }`
  const res = await fetch(`${baseUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })

  const json = await res.json()

  return json.data.footer
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
    }`

  const res = await fetch(`${baseUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })

  const json = await res.json()

  return json.data.menu
}

// export async function getPagesByCategory(categoria: string) {
//   const query = `
//     query GetPagesByCategory($categoria: String!) {
//       pages(filters: { slug: { eq: $categoria } }) {
//         slug
//       }
//     }`

//   const res = await fetch(`${baseUrl}/graphql`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables: { categoria },
//     }),
//   })

//   const json = await res.json()

//   return json.data.pages
// }