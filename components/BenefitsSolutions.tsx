import { RadioIcon } from "./ui/icons"

interface BenefitsSolutionsProps {
    beneficios: {texto: string}[];
    titulo: string;
    descricao: string;
}

export function BenefitsSolutions(props: BenefitsSolutionsProps) {

    const {beneficios, titulo, descricao} = props

    return(
        <section className="flex flex-col py-25 px-5 bg-primary text-white">
            <div className="flex flex-col gap-8 centered">
                <div className="text-center flex flex-col gap-2.5">
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>
                <div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {beneficios.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2.5">
                                <RadioIcon />
                                <p>{benefit.texto}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}