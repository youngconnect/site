"use client";

import { COMPANIES_TRUSTED } from "./constants";
import { Icon } from "@iconify/react";

export default function TrustedCompaniesComponent() {
    return (
        //  border-y border-gray-700/60
        <article className="w-full bg-linear-to-t from-gray-800/15 dark:from-gray-800 from-3% dark:from-20% to-transparent">
            <div className="overflow-hidden w-full h-45 flex-center">
                <div className="container mx-auto">
                    <ul className="flex items-center justify-between py-14" role="menu">
                        {
                            COMPANIES_TRUSTED
                            .map((company, index) => (
                                <li key={index} className="flex-center">
                                    <Icon icon={company.icon}  color="var(--foregound)" fill="var(--foregound)" className="[&>path]:fill-foreground size-32"/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </article>
    );
}
