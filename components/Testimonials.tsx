import { CardTestimonials } from "./ui/CardTestimonials";
import { getDepoimentos } from "@/services/strapi";
import { DepoimentosResponse, Depoimento} from "@/types";

export async function Testimonials() {
    const testimonials: DepoimentosResponse = await getDepoimentos();

    return(
        <section className="px-5 md:px-10 py-25 bg-[#EAEEEF]">
            <div className="flex flex-wrap w-full gap-5 md:justify-center">
                {testimonials.data.map((testimonial: Depoimento) => (
                    <CardTestimonials
                        key={testimonial.id}
                        authorName={testimonial.attributes.nomeAutor}
                        authorRole={testimonial.attributes.cargoEmpresa}
                        text={testimonial.attributes.texto}
                        rating={testimonial.attributes.avaliacao}
                        photo={testimonial.attributes.foto.data.attributes.url}
                    />
                ))}
            </div>
        </section>
    )
}