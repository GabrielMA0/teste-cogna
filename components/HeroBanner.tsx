import {Button} from "@/components/ui";

interface HeroBannerProps {
  heroTitulo: string;
  subtitulo: string;
  textoCta: string;
  urlCta: string;
  imagemFundo: {
    url: string;
  };
  ativo: boolean;
}

export function HeroBanner(props: HeroBannerProps) {
  
  const { heroTitulo, subtitulo, textoCta, urlCta, imagemFundo, ativo } = props;

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!ativo) return null;

  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${baseUrl + imagemFundo.url})` }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="pl-5 md:pl-15 w-full md:w-180 flex flex-col gap-5 relative z-10 text-white px-4">
        <div className="flex flex-col gap-1">
            <h1>{heroTitulo}</h1>
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