"use client";

import { Activity, ReactNode } from "react";
import { Icon } from "@iconify/react";
import { Fragment } from "react/jsx-runtime";
import Divider from "@src/components/atoms/divider";
import LogoApp from "@src/components/atoms/logo";
import Link from "next/link";

const ITEMS = [
    { icon: "fluent:copy-select-20-filled", description: "User Research and Persona Development" },
    { icon: "fluent:copy-select-20-filled", description: "User Research and Persona Development" },
    { icon: "fluent:copy-select-20-filled", description: "User Research and Persona Development" },
    { icon: "fluent:copy-select-20-filled", description: "User Research and Persona Development" },
];

export function ServiceContainer() {
    return (
        <Fragment>
            <article className="container mx-auto">
                {
                    Array.from({ length: 4 })
                        .map((_, index) => (
                            <ServiceContainerTitle
                                key={index}
                                title={"Design"} 
                                description={"At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."}
                            >
                                <TitleServiceContainer isFirst={true} title={"User Experience (UX) Design"} />
                                <GridServiceContainer items={ITEMS} />

                                <TitleServiceContainer title={"User Experience (UX) Design"} />
                                <GridServiceContainer items={ITEMS} />

                                <TitleServiceContainer title={"User Experience (UX) Design"} />
                                <GridServiceContainer items={ITEMS} />
                            </ServiceContainerTitle>
                        ))
                }
            </article>

            <article className="container mx-auto relative">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 z-2 bg-primary-900/15" />
                    <div 
                        className={"absolute inset-0 z-1 grayscale bg-center bg-no-repeat bg-cover opacity-30"}
                        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                    />
                </div>
                <div className="relative z-3 flex-center flex-col gap-10 px-10 py-24">
                    <div className="">
                        <LogoApp size={"clamp(4rem,5vw,7rem)"} />
                    </div>
                    <div className="@min-md:w-2/3 flex flex-col items-center text-center">
                        <h1 className="text-headline-32">
                            Deixe-nos trazer suas ideias para a vida no mundo digital.
                        </h1>
                        <p className="@min-md:w-3/4">
                            Independentemente dos serviços que escolher, estamos empenhados em oferecer resultados excepcionais que excedam as suas expectativas. Nossa equipe multidisciplinar trabalha em conjunto para garantir uma colaboração perfeita e uma visão unificada para o seu produto digital.
                        </p>
                    </div>
                    <div className="inline-flex">
                        <Link href={""} className="bg-primary px-7 py-4 rounded-md text-body-16 font-medium capitalize">Iniciar Projeto</Link>
                    </div>
                </div>
            </article>
        </Fragment>
    );
}

type ServiceContainerTitleProps = {
    title: string;
    description: string;
    children?: ReactNode | ReactNode[];
}
export function ServiceContainerTitle({ title, description, children }: ServiceContainerTitleProps) {
    return (
        <div className="size-full @md:pt-14 border-x border-x-gray-700">
            <div className="pt-10 flex flex-col space-y-10">
                {/* TITLE */}
                <div className="px-10 space-y-12 flex flex-col items-start">
                    <div className="space-y-1 @md:max-w-3/4">
                        <h1 className="text-headline-40">{title}</h1>
                        <p className="text-body-16 text-gray-200">{description}</p>
                    </div>
                    <span className="px-5 py-3 bg-gray-700 rounded-sm text-body-16">Our design services include:</span>
                </div>

                {/* CONTENT */}
                <div className="size-full">
                    {children}
                </div>
            </div>
        </div>
    );
}

type TitleServiceContainerProps = {
    title: string;
    isFirst?: boolean;
}
export function TitleServiceContainer({ title, isFirst = false }: TitleServiceContainerProps) {
    return (
        <Fragment>
            <Activity mode={isFirst ? "visible" : "hidden"}>
                <Divider />
            </Activity>

            <div className="container mx-auto">
                <div className="p-10 flex justify-center @min-md:justify-start">
                    <h2 className="text-gray-400 text-headline-24 font-medium">{title}</h2>
                </div>
            </div>

            {/* <Divider /> */}
        </Fragment>
    );
}

type GridItem = {
    icon: string | ReactNode;
    description: string;
}

type GridServiceContainerProps = {
    items: GridItem[];
}
export function GridServiceContainer({ items }: GridServiceContainerProps) {
    return (
        <ul className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-4" role="list">
            {
                items.map((item, index) => (
                    <li key={index} className="p-10 flex flex-col items-start gap-8 border-y not-last:border-r border-gray-700">
                        <div className="">
                            <span className="rounded-md size-18 bg-gray-800 ring ring-gray-700/85 flex-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,86,252,0.13)_0%,transparent_75%)]" />
                                {
                                    typeof item.icon === "string" ?
                                        <Icon icon={item.icon} color="transparent" fontSize={"1.95rem"} style={{ color: "var(--primary-900)" }} /> :
                                        item.icon
                                }
                            </span>
                        </div>
                        <div className="">
                            <p className="text-body-18 font-semibold">{item.description}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}
