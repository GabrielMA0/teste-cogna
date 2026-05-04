import { CardTestimonials } from "./ui/CardTestimonials";
import { DepoimentoAttributes} from "@/types";

interface TestimonialsProps {
    depoimentos: DepoimentoAttributes[];
}

export async function Testimonials(props: TestimonialsProps) {
    const {depoimentos} = props

    return(
        <section className="px-5 md:px-10 py-25 bg-[#EAEEEF]">
            <div className="flex flex-wrap w-full gap-5 md:justify-center">
                {depoimentos.map((testimonial: DepoimentoAttributes, index) => (
                    <CardTestimonials
                        key={index}
                        authorName={testimonial.nomeAutor}
                        authorRole={testimonial.cargoEmpresa}
                        text={testimonial.texto}
                        rating={testimonial.avaliacao}
                        photo={testimonial.foto.url}
                    />
                ))}
            </div>
        </section>
    )
}