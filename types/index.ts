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