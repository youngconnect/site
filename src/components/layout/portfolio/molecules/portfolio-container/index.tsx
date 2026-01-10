import { Activity, ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
import { ContainerServiceTitle } from "@src/components/molecules/container-service";
import Env from "@src/config/environment";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import BringServiceBanner from "@src/components/molecules/banners/bring-service";

export function PortfolioContainer() {
    return (
        <Fragment>
            <article className="container mx-auto">
                <ContainerServiceTitle
                    title={`Na ${Env.NEXT_PUBLIC_APP_NAME}`} 
                    description={"Tivemos o privilégio de trabalhar com uma gama diversificada de clientes e entregar produtos digitais excepcionais que impulsionam o sucesso."}
                >
                    <ul 
                        className="
                            size-full grid grid-cols-1 @min-lg:grid-cols-2
                            @min-lg:*:odd:border-r @min-lg:*:odd:border-r-gray-700
                        " 
                        role="list"
                    >
                        {
                            Array.from({ length: 10 })
                                .map((_, index) => (
                                    <TitleServiceContainer
                                        key={index}
                                        title={"Plataforma de E-Commerce para o Fashion Hub"}
                                    >
                                        <GridItemServiceContainer />
                                    </TitleServiceContainer>
                                ))
                        }
                    </ul>
                </ContainerServiceTitle>
            </article>

            <BringServiceBanner />
        </Fragment>
    );
}

type TitleServiceContainerProps = {
    title: string;
    isFirst?: boolean;
    children: ReactNode;
}
export function TitleServiceContainer({ title, isFirst = false, children }: TitleServiceContainerProps) {
    return (
        <div className="group container mx-auto" role="listitem">
            <div className="px-10 py-5 flex justify-center @min-lg:justify-start border-y border-y-gray-700 group-first:border-r group-first:border-r-gray-700">
                <h2 className="text-gray-400 text-headline-24 font-medium">{title}</h2>
            </div>

            {children}
        </div>
    );
}

type GridItem = { }

export function GridItemServiceContainer(props: GridItem) {
    return (
        <div className="p-10 @min-lg:pb-24 space-y-10">
            <div className="space-y-5">
                <div className="relative aspect-square rounded-md overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 z-2 bg-primary-900/15" />
                        <div 
                            className={"absolute inset-0 z-1 grayscale bg-center bg-no-repeat bg-cover opacity-30"}
                            style={{ backgroundImage: `url()` }}
                        />
                    </div>

                    <div className="relative z-3 flex-center">
                        <Image
                            src={"https://images.unsplash.com/photo-1620207284057-e6c6b3d1b4c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            width={500}
                            height={500}
                            alt={"Empresa XPTO"}
                            loading={"lazy"}
                            className="absolute top-10 rounded-md"
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col items-start gap-3">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-headline-24 font-medium">Chic Boutique</h1>
                        
                        <Link 
                            href={""} 
                            className="hidden items-center justify-center @min-lg:flex  bg-gray-600 rounded-md size-10"
                        >
                            <Icon icon={"hugeicons:share-04"} fontSize={"1.05rem"} color="var(--primary-800)" />
                        </Link>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <Link href={""} className="px-3 py-2 bg-gray-700 rounded-sm text-body-16">
                            htttps:/www.chicboutique.com
                        </Link>

                        <Link 
                            href={""} 
                            className="flex-center @min-lg:hidden bg-gray-600 rounded-md size-10"
                        >
                            <Icon icon={"hugeicons:share-04"} fontSize={"1.05rem"} color="var(--primary-800)" />
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className="block">
                <p className="">
                    We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.
                </p>
            </div>
        </div>
    );
}
