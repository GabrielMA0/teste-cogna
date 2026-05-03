// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// export async function getHeroBanner() {
//   try {
//     const response = await fetch(`${STRAPI_URL}/api/hero-banners?filters[active][$eq]=true&populate=*`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch hero banner');
//     }
//     const data = await response.json();
//     return data.data[0]; // Assuming there's only one active banner
//   } catch (error) {
//     console.error('Error fetching hero banner:', error);
//     return null;
//   }
// }

// export async function getSolucoes() {
//   try {
//     const response = await fetch(`${STRAPI_URL}/api/solucoes?populate=*`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch solucoes');
//     }
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error('Error fetching solucoes:', error);
//     return [];
//   }
// }

// export async function getSolucaoBySlug(slug: string) {
//   try {
//     const response = await fetch(`${STRAPI_URL}/api/solucoes?filters[slug][$eq]=${slug}&populate=*`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch solucao by slug');
//     }
//     const data = await response.json();
//     return data.data[0]; // Assuming slug is unique
//   } catch (error) {
//     console.error('Error fetching solucao by slug:', error);
//     return null;
//   }
// }

// export async function getDepoimentos() {
//   try {
//     const response = await fetch(`${STRAPI_URL}/api/depoimentos?populate=*`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch depoimentos');
//     }
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error('Error fetching depoimentos:', error);
//     return [];
//   }
// }

import { heroBanner, solucoes, depoimentos } from "@/mocks/data.ts";
import {
  HeroBanner,
  SolucoesResponse,
  Solucao,
  DepoimentosResponse,
} from "@/types";

/**
 * getHeroBanner → retorna o banner ativo
 */
export async function getHeroBanner(): Promise<HeroBanner | null> {
  if (heroBanner.data.attributes.ativo) {
    return heroBanner;
  }

  return null;
}

/**
 * getSolucoes → retorna todas as soluções
 */
export async function getSolucoes(): Promise<SolucoesResponse> {
  return solucoes;
}

/**
 * getSolucaoBySlug → retorna uma solução pelo slug
 */
export async function getSolucaoBySlug(slug: string): Promise<{ data: Solucao }> {
  const solucao = solucoes.data.find(
    (item) => item.attributes.slug === slug
  );

  if (!solucao) {
    throw new Error("Solução não encontrada");
  }

  return { data: solucao };
}

/**
 * getDepoimentos → retorna todos os depoimentos
 */
export async function getDepoimentos(): Promise<DepoimentosResponse> {
  return depoimentos;
}