import Env from "@src/config/environment";
import ContainerHomePage from "../../container-homepage";
import { REASONS } from "./constants";
import { Icon } from "@iconify/react";

export default function WhyChooseUsComponent() {
    return (
        <ContainerHomePage
            title={`Por quê escolher a ${Env.NEXT_PUBLIC_APP_NAME}`}
            description="Experimente a excelência em artesanato digital com nossa equipe de profissionais qualificados dedicados a entregar resultados excepcionais."
            urlBannerImage={"https://images.unsplash.com/photo-1730804518415-75297e8d2a41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2324"}
        >
            <article className="container mx-auto">
                <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    {
                        REASONS.map((reason, index) => (
                            <div key={index} className={"p-10 space-y-10 border border-gray-700/65"}>
                                <div className="flex items-center gap-5">
                                    <span className="rounded-md size-22 bg-gray-800 ring ring-gray-700/85 flex-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,86,252,0.13)_0%,transparent_75%)]" />
                                        <Icon icon={reason.icon} color="transparent" fontSize={"2.85rem"} style={{ color: "var(--primary-900)" }} />
                                    </span>
                                    <h1 className="text-headline-20 font-medium">{reason.title}</h1>
                                </div>
                                <div className="">
                                    <p className="text-body-16">{reason.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </article>
        </ContainerHomePage>
    );
}
