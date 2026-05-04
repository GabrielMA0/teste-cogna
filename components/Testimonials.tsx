import { CardTestimonials } from "./ui/CardTestimonials";

export interface TestimonialsProps {
  nomeAutor: string;
  cargoEmpresa: string;
  texto: string;
  avaliacao: number;
  foto: {
    url: string;
  };
}

interface DepoimentoAttributes {
    depoimentos: TestimonialsProps[];
}

export async function Testimonials(props: DepoimentoAttributes) {
    const {depoimentos} = props

    return(
        <section className="px-5 md:px-10 py-25 bg-[#EAEEEF]">
            <div className="flex flex-wrap w-full gap-5 md:justify-center">
                {depoimentos.map((testimonial: TestimonialsProps, index) => (
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