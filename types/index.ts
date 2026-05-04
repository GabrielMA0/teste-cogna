export interface ImageAttributes {
  url: string;
}

export interface ImageData {
  data: {
    attributes: ImageAttributes;
  };
}

export interface HeroBannerAttributes {
  titulo: string;
  subtitulo: string;
  textoCta: string;
  urlCta: string;
  imagemFundo: ImageData;
  ativo: boolean;
}

export interface HeroBanner {
  data: {
    id: number;
    attributes: HeroBannerAttributes;
  };
}

// ------------------------

export interface SolucaoAttributes {
  nome: string;
  slug: string;
  descricaoBreve: string;
  descricaoCompleta: string;
  publicoAlvo: string;
  beneficios: string[];
  destaque: boolean;
  icone: ImageData;
}

export interface Solucao {
  id: number;
  attributes: SolucaoAttributes;
}

export interface SolucoesResponse {
  data: Solucao[];
}

// ------------------------

export interface DepoimentoAttributes {
  nomeAutor: string;
  cargoEmpresa: string;
  texto: string;
  avaliacao: number;
  foto: ImageData;
}

export interface Depoimento {
  id: number;
  attributes: DepoimentoAttributes;
}

export interface DepoimentosResponse {
  data: Depoimento[];
}

export interface StrapiResponse<T> {
  data: T;
  meta: Record<string, unknown>;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: unknown | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
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
  logo: StrapiImage;
  menu: MenuItem[];
}

export type HeaderResponse = StrapiResponse<Header>;