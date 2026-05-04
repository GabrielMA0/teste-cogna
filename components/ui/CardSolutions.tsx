import { Button } from "@/components/ui";
import Image from "next/image";

interface CardSolutionsProps {
    title: string;
    description: string;
    audience?: string;
    emphasis: boolean;
    icon: string;
    buttons?: {
        textoBotao: string;
        urlBotao: string;
    }[];
}

export function CardSolutions({title, description, icon, audience, emphasis, buttons}: CardSolutionsProps) {
    return(
        <div className={`w-full md:w-102.5 md:h-95 bg-white flex flex-col gap-4 p-10 rounded-[24] border-b-[5px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] ${emphasis ? 'border-secondary' : 'border-primary'}`}>
            <div className="flex items-center justify-center bg-primary rounded-[16] w-16 h-16">
                <Image width={30} height={30} src={icon} alt={title} />
            </div>
            <h3 className="text-primary">{title}</h3>
            <p className="text-neutral">{description}</p>
            {audience && <p className="md:h-10.5">Público: {audience}</p>}
            <div className="flex justify-between w-full">
                    {buttons?.map((button, index) => (
                        <Button
                            key={index}
                            text={button.textoBotao}
                            url={button.urlBotao}
                            variant="secondary"
                        />
                    ))}
            </div>
        </div>
    )
}