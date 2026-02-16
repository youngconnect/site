"use client";

import { Fragment } from "react/jsx-runtime";
import BringServiceBanner from "@src/components/molecules/banners/bring-service";
import { ContainerServiceTitle } from "@src/components/molecules/container-service";
import TitleServiceContainer from "./molecules/title-service-container";
import GridServiceContainer from "./molecules/grid-service-container";

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
                                message={"Nossos serviços de design incluem:"}
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
