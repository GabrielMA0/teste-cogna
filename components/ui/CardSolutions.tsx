import {Button} from "@/components/ui";
import Image from "next/image";

// interface ButtonsProps {
//     text: string;
//     url: string;
//     variant: 'primary' | 'secondary';
// }

interface CardSolutionsProps {
    title: string;
    slug: string;
    description: string;
    audience?: string;
    emphasis: boolean;
    icon: string;
    showAudience?: boolean;
    showBtnSolucoes?: boolean;
}

export function CardSolutions({title, description, icon, slug, audience, emphasis, showAudience, showBtnSolucoes}: CardSolutionsProps) {
    return(
        <div className={`w-full md:w-102.5 md:h-95 bg-white flex flex-col gap-4 p-10 rounded-[24] border-b-[5px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] ${emphasis ? 'border-secondary' : 'border-primary'}`}>
            <div className="flex items-center justify-center bg-primary rounded-[16] w-16 h-16">
                <Image width={30} height={30} src={icon} alt={title} />
            </div>
            <h3 className="text-primary">{title}</h3>
            <p className="text-neutral">{description}</p>
            {audience && showAudience && <p className="md:h-10.5">Público: {audience}</p>}
            <div className="flex justify-between w-full">
                    <Button
                        text="Saiba mais"
                        url={`/solucoes/${slug}`}
                        variant="secondary"
                    />

                    {showBtnSolucoes && (
                        <Button
                            text="Soluções"
                            url="/solucoes"
                            variant="secondary"
                        />
                    )}
            </div>
        </div>
    )
}