import { Fragment } from "react/jsx-runtime";
import { ContainerServiceTitle } from "@src/components/molecules/container-service";
import Env from "@src/config/environment";
import ThanksComponent from "@src/components/layout/home/molecules/sections/thanks";
import { PROCESS_FLOW } from "./constants";

export function ProcessContainer() {
    return (
        <Fragment>
            <article className="container mx-auto">
                <ContainerServiceTitle
                    title={`Na ${Env.NEXT_PUBLIC_APP_NAME}`} 
                    message={"Aqui está uma visão geral do nosso processo típico:"}
                    description={"Seguimos um processo estruturado e colaborativo para garantir a entrega bem-sucedida de produtos digitais excepcionais. Nosso processo combina as melhores práticas do setor, pensamento criativo e uma abordagem centrada no cliente."}
                >
                    <ul 
                        className="
                            size-full grid grid-cols-1 @min-lg:grid-cols-2
                            @min-lg:*:odd:border-r @min-lg:*:odd:border-r-gray-700
                        " 
                        role="list"
                    >
                        {
                            PROCESS_FLOW.map((process, index) => (
                                    <GridItemServiceContainer key={index} index={index + 1} {...process} />
                                ))
                        }
                    </ul>
                </ContainerServiceTitle>
            </article>

            <ThanksComponent/>
        </Fragment>
    );
}

type GridItem = {
    index: number;
    title: string;
    description: string;
}

export function GridItemServiceContainer({ title, index, description }: GridItem) {
    return (
        <li className="
                p-10 @min-lg:pb-24 space-y-10 
                not-last-of-type:border-b not-last-of-type:border-b-gray-700
                first-of-type:border-t first-of-type:border-t-gray-700
                nth-of-type-[2]:border-t nth-of-type-[2]:border-t-gray-700
            " 
            role="listitem"
        >
            <div className="flex items-center justify-start gap-5">
                <h1 className="flex-none w-fit text-display-80 text-8xl text-primary">
                    {String(index).padStart(2, "0")}
                </h1>
                <h2 className="flex-1 h-12 border-b border-b-gray-700 text-headline-24 text-gray-300">{title}</h2>
            </div>

            <p className="text-body-16 text-justify text-gray-400">{description}</p>
        </li>
    );
}
