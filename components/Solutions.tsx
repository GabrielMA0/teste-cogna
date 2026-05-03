import { CardSolutions } from "@/components/ui";
import { getSolucoes } from "@/services/strapi";
import {SolucoesResponse, Solucao} from "@/types";

export async function Solutions() {
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
        <section className="p-10 gap-16 flex flex-col items-center">
            <h2 className="text-primary">Nossas Soluções</h2>
            <div className="flex gap-6">
                {solucoes.data.map((solucao: Solucao, index) => (
                    <CardSolutions
                        key={index}
                        title={solucao.attributes.nome}
                        description={solucao.attributes.descricaoBreve}
                        icon={solucao.attributes.icone.data.attributes.url}
                        slug={solucao.attributes.slug}
                        emphasis={solucao.attributes.destaque}
                    />
                ))}
            </div>
        </section>
    )
}