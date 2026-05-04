export interface ImageAttributes {
  url: string;
}

export interface HeroBannerAttributes {
  titulo: string;
  subtitulo: string;
  textoCta: string;
  urlCta: string;
  imagemFundo: ImageAttributes;
  ativo: boolean;
}

export interface SolucaoAttributes {
  nome: string;
  slug?: string;
  descricaoBreve: string;
  descricaoCompleta?: string;
  publicoAlvo?: string;
  beneficios?: string[];
  destaque: boolean;
  icone: ImageAttributes;
  botoes?: {
    textoBotao: string;
    urlBotao: string;
  }[];
}

export interface DepoimentoAttributes {
  nomeAutor: string;
  cargoEmpresa: string;
  texto: string;
  avaliacao: number;
  foto: {
    url: string;
  };
}

export interface StrapiResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}

export interface MenuItem {
  id: number;
  label: string;
  url: string;
}

export interface Header {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: {url: string};
  menu: MenuItem[];
}

export type HeaderResponse = StrapiResponse<Header>;