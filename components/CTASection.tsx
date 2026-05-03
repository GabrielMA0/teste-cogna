import { Button } from "@/components/ui";
import { CircleIcon } from "@/components/ui/icons";

export function CTASection() {
    return(
        <section className="bg-white py-25 px-5 md:px-10">
            <div className="overflow-hidden relative max-w-179 text-white text-center mx-auto flex flex-col items-center gap-5 px-5 md:px-20 py-20 rounded-4xl bg-primary shadow-lg">
                <CircleIcon className="absolute -left-32 -bottom-32" />
                <CircleIcon className="absolute -right-32 -top-32" />
                <h2>Pronto para elevar o nível da sua equipe?</h2>
                <p>Nossos especialistas estão prontos para desenhar a jornada de
                aprendizado ideal para o seu negócio.
                </p>
                <Button
                    text="Ver todas as soluções"
                    variant="tertiary"
                    url="/solucoes"
                />
            </div>
        </section>
    )
}