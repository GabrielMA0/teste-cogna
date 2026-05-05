import { CardSolutions } from "@/components/ui";
export interface ImageAttributes {
  url: string;
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

interface SolutionsSectionProps {
    ctaTitulo?: string;
    descricao?: string;
    cardSolucao: SolucaoAttributes[];
}

export async function SolutionsSection(props: SolutionsSectionProps) {
    const { ctaTitulo, descricao, cardSolucao } = props;

    return(
        <section className="px-5 md:px-10 py-10 gap-16 flex flex-col items-center">
            <div className="max-w-179 text-center flex flex-col gap-5">
                {ctaTitulo && (
                    <h2 className="text-primary">{ctaTitulo}</h2>
                )}
                {descricao && (
                    <p className="text-neutral">{descricao}</p>
                )}
            </div>
            
            <div className="flex gap-6 flex-wrap justify-center">
                {cardSolucao.map((solucao: SolucaoAttributes, index) => (
                    <CardSolutions
                        key={index}
                        title={solucao.nome}
                        description={solucao.descricaoBreve}
                        icon={solucao.icone.url}
                        buttons={solucao.botoes}
                        emphasis={solucao.destaque}
                        audience={solucao.publicoAlvo}
                    />
                ))}
            </div>
        </section>
    )
}