import Divider from "@src/components/atoms/divider";
import LogoApp from "@src/components/atoms/logo";
import { HEADER_APP_MENU_ITEMS } from "@src/components/layout/header/constants";
import Env from "@src/config/environment";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { CONTACT_US_WAYS } from "@src/components/layout/contact-us/constants";
import { Fragment } from "react/jsx-runtime";
import { Activity } from "react";
import CardContact from "./molecules/card-contact";

const currentYear = new Date().getFullYear();

export default function FooterApp() {
    return (
        <footer className="@container">
            <div className="py-10 space-y-8">
                <Divider />

                <div className="container mx-auto space-y-14">
                    <div className="flex justify-between items-center flex-col @md:flex-row gap-y-8 px-5 @md:px-0">
                        <div className="flex-center gap-3">
                            <LogoApp size={"45"} />
                            <span className="text-headline-24 text-[1.15rem] text-foreground">{Env.NEXT_PUBLIC_APP_NAME}</span>
                        </div>

                        <Divider  className="block @md:hidden"/>

                        <ul className="flex items-center justify-center flex-wrap gap-3" role="list">
                            {
                                HEADER_APP_MENU_ITEMS.map((item, key) => (
                                    <li key={key} role="listitem">
                                        <Link key={key} href={item.url} className="inline-block leading-8 px-3">{item.label}</Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <CardContact />
                    </div>

                    <Divider className="hidden @md:block" />
                    
                    <div className="flex justify-between items-center @md:items-start flex-col @md:flex-row gap-y-5 px-5 @md:px-0">
                        <ul className="flex items-center flex-col @md:flex-row gap-3 w-full">
                            {
                                CONTACT_US_WAYS.map((contact, index, arr) => (
                                    <Fragment key={index}>
                                        <li key={index} className="">
                                            <Link href={contact.url} className="inline-flex items-center gap-2">
                                                <Icon icon={contact.icon} className="text-primary" fontSize={"1.25rem"} />
                                                <span className="text-body-14">{contact.label}</span>
                                            </Link>
                                        </li>
                                        <Activity mode={(arr.length - 1) !== index ? "visible" : "hidden"}>
                                            <Divider className="block @md:hidden" />
                                        </Activity>
                                    </Fragment>
                                ))
                            } 
                        </ul>

                        <Divider className="block @md:hidden" />
                        
                        <div className="">
                            <p className="text-body-14 text-gray-400">
                                &copy; {currentYear} {Env.NEXT_PUBLIC_APP_NAME}. Todos direitos reservados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
