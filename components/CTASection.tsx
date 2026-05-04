import { Button } from "@/components/ui";
import { CircleIcon } from "@/components/ui/icons";

interface CTASectionProps {
    titulo: string;
    descricao: string;
    textoBotao: string;
    urlBotao: string;
}

export function CTASection(props: CTASectionProps) {
    const {titulo, descricao, textoBotao, urlBotao} = props
    
    return(
        <section className="bg-white py-25 px-5 md:px-10">
            <div className="overflow-hidden relative max-w-179 text-white text-center mx-auto flex flex-col items-center gap-5 px-5 md:px-20 py-20 rounded-4xl bg-primary shadow-lg">
                <CircleIcon className="absolute -left-32 -bottom-32" />
                <CircleIcon className="absolute -right-32 -top-32" />
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <Button
                    text={textoBotao}
                    variant="tertiary"
                    url={urlBotao}
                />
            </div>
        </section>
    )
}