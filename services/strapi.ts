const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getPage(slug: string) {
  const query = `
    query GetPage($slug: String!) {
  pages(filters: { slug: { eq: $slug } }) {
    documentId
    slug
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
      variables: { slug },
    }),
  })

  const json = await res.json()

  return json.data.pages[0]
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