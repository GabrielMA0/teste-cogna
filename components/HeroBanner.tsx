'use client';

import { getHeroBanner } from "@/services/strapi";
import { useEffect, useState } from "react";
import {Button} from "@/components/ui";

interface HeroBannerProps {
  titulo: string;
  subtitulo: string;
  textoCta: string;
  urlCta: string;
  imagemFundo: string;
  ativo: boolean;
}

export const HeroBanner = () => {

    const [bannerData, setBannerData] = useState<HeroBannerProps | null>(null);

    useEffect(() => {
        async function fetchBanner() {
            const data = await getHeroBanner();
            if (data) {
                setBannerData({
                    titulo: data.data.attributes.titulo,
                    subtitulo: data.data.attributes.subtitulo,
                    textoCta: data.data.attributes.textoCta,
                    urlCta: data.data.attributes.urlCta,
                    imagemFundo: data.data.attributes.imagemFundo.data.attributes.url,
                    ativo: data.data.attributes.ativo
                });
            }
        }
        fetchBanner();
    }, []);

    if (!bannerData) return null;

    const { titulo, subtitulo, textoCta, urlCta, imagemFundo, ativo } = bannerData;

    if (!ativo) return null;

    return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${imagemFundo})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="pl-15 w-180 flex flex-col gap-5 relative z-10 text-white px-4">
        <div className="flex flex-col gap-1">
            <h1>{titulo}</h1>
            <p>{subtitulo}</p>
        </div>
        <Button
          text={textoCta}
          url={urlCta}
          variant="primary"
        />
      </div>
    </section>
  );
};

export default HeroBanner;