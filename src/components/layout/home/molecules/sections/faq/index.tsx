"use client";

import Env from "@src/config/environment";
import ContainerHomePage from "../../container-homepage";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@src/components/ui/accordion";
import { useMutation } from "@tanstack/react-query";
import { cacheKeyFAQ } from "@src/services/faq/cache-keys";
import { FAQService } from "@src/services/faq";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

export default function FAQComponent() {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    const { mutate: mutateGetAllFaq, data: faqs = [], isPending: isLoadingAllFaq } = useMutation({
        mutationKey: [cacheKeyFAQ.getAllTestimonials],
        mutationFn: FAQService.getAllFAQ
    });

    useEffect(() => {
        if (isMobile) {
            return mutateGetAllFaq({ limit: 4 });
        }

        mutateGetAllFaq({});
    }, [isMobile]);

    return (
        <ContainerHomePage 
            title="Perguntas Frequentes" 
            description={`Você ainda tem alguma dúvida? Entre em contato com nossa equipe através do ${Env.NEXT_PUBLIC_EMAIL_COMPANY}`}
            urlBannerImage={"https://images.unsplash.com/photo-1636574879131-5f3cd5c8a8e1?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            // urlBannerImage={"https://images.unsplash.com/photo-1665789318391-6057c533005e?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        >
            <article className="container mx-auto">
                <Accordion type="single" collapsible className="columns-1 md:columns-2 space-y-4 p-10">
                    {
                        isLoadingAllFaq ? <span className="">Carregando Componente</span> : 
                        faqs?.map((faq, index) => (
                            <AccordionItem key={index} value={`faq-${index}`} className="border-none px-10 py-5 ring ring-gray-700/65">
                                <AccordionTrigger 
                                    className="group hover:no-underline items-center"
                                    expandIcon={<Icon icon={"ic:baseline-plus"} className="group-data-[state=open]:text-primary-900 pointer-events-none size-8 shrink-0 translate-y-0.5 transition-transform duration-200" /> }
                                >
                                    <div className="flex-center gap-5">
                                        <div className="flex-center">
                                            <span className="size-16 rounded-md ring ring-gray-700/45 flex-center text-headline-24 bg-gray-800/65 overflow-hidden relative group-data-[state=open]:text-primary-900">
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,196,196,0.10)_0%,transparent_55%)]" />
                                                { String(index + 1).padStart(2, "0") }
                                            </span>
                                        </div>
                                        <div className="py-2">
                                            <h1 className="text-body-16 font-bold group-data-[state=open]:text-primary-900">{faq.title}</h1>
                                        </div>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="w-full flex gap-5">
                                        <div className="flex-none w-18" />
                                        <div className="flex-1">
                                            <p className="">{faq.content}</p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </article>
        </ContainerHomePage>
    );
}
