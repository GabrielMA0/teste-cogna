import { CardSolutions } from "@/components/ui";
import { getSolucoes } from "@/services/strapi";
import {SolucoesResponse, Solucao} from "@/types";

export async function SolutionsSection({title, showAudience, showBtnSolucoes}: {title?: string, showAudience?: boolean, showBtnSolucoes?: boolean}) {
    const solucoes: SolucoesResponse = await getSolucoes();

    // const btns = [
    //     {
    //         text: 'Saiba mais',
    //         url: '/solucoes/slug-da-solucao',
    //         variant: 'secondary'
    //     },
    //     {
    //         text: 'Soluções',
    //         url: '/solucoes',
    //         variant: 'secondary'
    //     }
    // ]

    return(
        <section className="px-5 md:px-10 py-10 gap-16 flex flex-col items-center">
            {title && (
                <h2 className="text-primary">{title}</h2>
            )}
            <div className="flex gap-6 flex-wrap justify-center">
                {solucoes.data.map((solucao: Solucao, index) => (
                    <CardSolutions
                        key={index}
                        title={solucao.attributes.nome}
                        description={solucao.attributes.descricaoBreve}
                        icon={solucao.attributes.icone.data.attributes.url}
                        slug={solucao.attributes.slug}
                        emphasis={solucao.attributes.destaque}
                        audience={solucao.attributes.publicoAlvo}
                        showAudience={showAudience}
                        showBtnSolucoes={showBtnSolucoes}
                    />
                ))}
            </div>
        </section>
    )
}