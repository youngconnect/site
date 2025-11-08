import Env from "@src/config/environment";
import ContainerHomePage from "../container-homepage";
import { testimonialService } from "@src/services/testimonials";
import TestimonialCard from "./molecules/card";

export default async function TestimonialsComponent() {
    const testimonials = await testimonialService.getAllTestimonials();

    return (
        <ContainerHomePage 
            title="O que nossos Clientes dizem Sobre nós" 
            description={
                <p className="text-body-14 @md:w-[65%] @sm:w-[80%]">
                    {`Na ${Env.NEXT_PUBLIC_APP_NAME}, temos orgulho em oferecer produtos e serviços digitais excepcionais que impulsionam o sucesso de nossos clientes. Eis o que alguns dos nossos clientes satisfeitos têm a dizer sobre a sua experiência de trabalho connosco`}
                </p>
            }
        >
            <div className="container mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-2">
                    {
                        testimonials?.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))
                    }
                </div>
            </div>
        </ContainerHomePage>
    );
}
