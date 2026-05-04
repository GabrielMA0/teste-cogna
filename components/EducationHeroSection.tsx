import Image from "next/image"
import { Button } from "@/components/ui";
import { ArrowIcon } from "./ui/icons";
interface EducationHeroSectionProps {
    titulo: string;
    descricao: string;
    icone: {
        url: string;
    };
    publicoAlvo: string;
}   

export function EducationHeroSection(props: EducationHeroSectionProps) {
    const { titulo, descricao, icone, publicoAlvo } = props;

    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

    return(
        <section className="relative py-10">
            <Button iconLeft={<ArrowIcon />} text="Voltar" variant="primary" url="/solucoes" className="absolute left-5 top-5 p-2.5! md:p-5!"/>
            <div className="flex flex-col gap-5 items-center justify-center max-w-179 mx-auto text-center">
                <div className="flex items-center justify-center bg-primary rounded-[16] w-16 h-16">
                    <Image width={30} height={30} src={baseUrl + icone.url} alt={titulo} />
                </div>
                <h1 className="text-primary">{titulo}</h1>
                <p>{descricao}</p>
                <p>Público: {publicoAlvo}</p>
            </div>
        </section>
    )
}