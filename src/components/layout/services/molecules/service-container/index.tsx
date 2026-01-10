"use client";

import { Activity, ReactNode } from "react";
import { Icon } from "@iconify/react";
import { Fragment } from "react/jsx-runtime";
import Divider from "@src/components/atoms/divider";
import BringServiceBanner from "@src/components/molecules/banners/bring-service";
import { ContainerServiceTitle } from "@src/components/molecules/container-service";

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
                            <ContainerServiceTitle
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
                            </ContainerServiceTitle>
                        ))
                }
            </article>

            <BringServiceBanner />
        </Fragment>
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
                <div className="p-10 flex justify-center @min-lg:justify-start">
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
        <ul className="grid grid-cols-1 @min-lg:grid-cols-2 @lg:grid-cols-4" role="list">
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
