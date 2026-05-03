export const heroBanner = {
  data: {
    id: 1,
    attributes: {
      titulo: "Transformando a educação do Brasil",
      subtitulo: "Soluções educacionais para empresas, escolas e pessoas.",
      textoCta: "Conheça nossas soluções",
      urlCta: "/solucoes",
      imagemFundo: {
        data: {
          attributes: {
            url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600"
          }
        }
      },
      ativo: true
    }
  }
};

export const solucoes = {
  data: [
    {
      id: 1,
      attributes: {
        nome: "Cogna Ensino Superior",
        slug: "ensino-superior",
        descricaoBreve: "Graduação e pós-graduação com qualidade e acessibilidade.",
        descricaoCompleta: "Com mais de 20 anos de experiência, a Cogna oferece graduação e pós-graduação presencial e EAD em todo o Brasil. Nossos cursos são reconhecidos pelo MEC e preparados por especialistas para o mercado atual.",
        publicoAlvo: "Estudantes de graduação e pós-graduação",
        beneficios: [
          "Mais de 500 cursos disponíveis",
          "EAD e presencial",
          "Certificados reconhecidos pelo MEC",
          "Bolsas e financiamento estudantil"
        ],
        destaque: true,
        icone: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/3976/3976625.png"
            }
          }
        }
      }
    },
    {
      id: 2,
      attributes: {
        nome: "Educação Básica",
        slug: "educacao-basica",
        descricaoBreve: "Sistemas de ensino e plataformas para escolas de todo o Brasil.",
        descricaoCompleta: "Oferecemos soluções completas para redes públicas e privadas de ensino fundamental e médio. Nossa plataforma integra gestão escolar, material didático e acompanhamento pedagógico em um único lugar.",
        publicoAlvo: "Escolas públicas e privadas",
        beneficios: [
          "Plataforma integrada de gestão",
          "Material didático alinhado à BNCC",
          "Suporte pedagógico dedicado",
          "Relatórios de desempenho em tempo real"
        ],
        destaque: false,
        icone: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/2436/2436874.png"
            }
          }
        }
      }
    },
    {
      id: 3,
      attributes: {
        nome: "Soluções Corporativas",
        slug: "corporativo",
        descricaoBreve: "Treinamento e desenvolvimento profissional para equipes.",
        descricaoCompleta: "Desenvolvemos programas customizados de capacitação e upskilling para empresas de todos os portes. Da trilha de onboarding ao desenvolvimento de lideranças, entregamos aprendizagem com resultado mensurável.",
        publicoAlvo: "Empresas e equipes corporativas",
        beneficios: [
          "Programas 100% customizáveis",
          "Instrutores especialistas de mercado",
          "LMS próprio com relatórios de engajamento",
          "Certificados e trilhas de carreira"
        ],
        destaque: false,
        icone: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png"
            }
          }
        }
      }
    }
  ]
};

export const depoimentos = {
  data: [
    {
      id: 1,
      attributes: {
        nomeAutor: "Mariana Costa",
        cargoEmpresa: "Diretora de RH · TechBrasil",
        texto: "A parceria com a Cogna transformou o programa de desenvolvimento da nossa equipe. Resultados visíveis em menos de 6 meses.",
        avaliacao: 5,
        foto: {
          data: {
            attributes: {
              url: "https://randomuser.me/api/portraits/women/44.jpg"
            }
          }
        }
      }
    },
    {
      id: 2,
      attributes: {
        nomeAutor: "Rafael Mendes",
        cargoEmpresa: "Coordenador Pedagógico · Escola Futuro",
        texto: "O sistema de ensino da Cogna elevou nossos índices de aprovação no ENEM em 18%. Suporte excepcional do time.",
        avaliacao: 5,
        foto: {
          data: {
            attributes: {
              url: "https://randomuser.me/api/portraits/men/32.jpg"
            }
          }
        }
      }
    },
    {
      id: 3,
      attributes: {
        nomeAutor: "Juliana Ferreira",
        cargoEmpresa: "Estudante de Administração · Anhanguera",
        texto: "Consegui conciliar trabalho e faculdade graças à flexibilidade do EAD. A qualidade superou minhas expectativas.",
        avaliacao: 4,
        foto: {
          data: {
            attributes: {
              url: "https://randomuser.me/api/portraits/women/68.jpg"
            }
          }
        }
      }
    }
  ]
};