import { SERVICES } from "./constants";
import { Icon } from "@iconify/react";
import { Button } from "@src/components/ui/button";
import Link from "next/link";
import ContainerHomePage from "../../container-homepage";

export default function ServicesComponent() {
    return (
        <ContainerHomePage 
            title="Nossos serviços" 
            description="Cada solução é pensada para inspirar, envolver e transformar o seu público. Transformamos presença digital em crescimento e resultados"
            urlBannerImage={"https://images.unsplash.com/photo-1575470522418-b88b692b8084?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2376"}
        >
            <article className="container mx-auto">
                <div className="grid grid-cols-1 @min-lg:grid-cols-3">
                    {
                        SERVICES.map((service, index) => (
                            <div key={index} className="space-y-24 p-10 @sm:border-b @sm:last:border-b-0 @min-lg:border-r @min-lg:border-b-0 @min-lg:last:border-r-0 border-gray-700">
                                <div className="space-y-5 h-85">
                                    <div className="">
                                        <span className="rounded-md size-22 bg-gray-800 ring ring-gray-700/85 flex-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,86,252,0.13)_0%,transparent_75%)]" />
                                            <Icon icon={service.icon} color="transparent" fontSize={"2.85rem"} style={{ color: "var(--primary-900)" }} />
                                        </span>
                                    </div>
                                    <div className="">
                                        <h1 className="text-headline-32">{service.title}</h1>
                                    </div>
                                    <div className="">
                                        <p className="text-start text-body-16">{service.description}</p>
                                    </div>
                                </div>
                                <div className="h-12">
                                    <Button asChild className="w-full min-w-0 px-0">
                                        <Link href={""} className="text-headline-64">Saber mais</Link>
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </article>
        </ContainerHomePage>
    );
}
