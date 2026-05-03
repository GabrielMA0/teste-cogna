import Image from "next/image";
import { notFound } from "next/navigation";
import { getSolucaoBySlug } from "@/services/strapi";
import {RadioIcon, ArrowIcon} from "@/components/ui/icons";
import { Button } from "@/components/ui";

export default async function SolucaoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const solucao = await getSolucaoBySlug(slug);

  if (!solucao) {
    notFound();
  }
  
  return (
    <main>
        <section className="relative py-10 px-5">
            <div className="static md:absolute left-5 top-5 ">
                <Button text="Voltar" url="/solucoes" iconLeft={<ArrowIcon />} className="p-2.5! md:p-5!" />
            </div>

            <div className="flex flex-col items-center gap-5 max-w-179 mx-auto text-center">
                <div className="flex items-center justify-center bg-primary rounded-[16] w-16 h-16">
                    <Image width={30} height={30} src={solucao.data.attributes.icone.data.attributes.url} alt={solucao.data.attributes.nome} />
                </div>
                <h1 className="text-primary">{solucao.data.attributes.nome}</h1>
                <p className="text-neutral">{solucao.data.attributes.descricaoCompleta}</p>
                <p className="text-neutral">Público: {solucao.data.attributes.publicoAlvo}</p>
            </div>
        </section>

        <section className="flex flex-col items-center gap-8 px-5 py-25 bg-primary text-white text-center">
            <div className="flex flex-col gap-2.5">
                <h2>Por que escolher esta solução?</h2>
                <p>Diferenciais que tornam nossa plataforma a líder no mercado de educação
                de alto nível.
                </p>
            </div>
            

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-186">
            {solucao.data.attributes.beneficios.map((diferencial, index) => (
                <li key={index} className="text-left">
                    <div className="flex gap-2.5 items-center">
                        <RadioIcon className="text-secondary" />
                        {diferencial}
                    </div>
                </li>
            ))}
        </ul>
        </section>
    </main>
  );
}