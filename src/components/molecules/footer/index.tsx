import Divider from "@src/components/atoms/divider";
import LogoApp from "@src/components/atoms/logo";
import { HEADER_APP_MENU_ITEMS } from "@src/components/layout/header/constants";
import Env from "@src/config/environment";
import Link from "next/link";
import { SOCIAL_MEDIA_LINKS } from "./constants";
import { Icon } from "@iconify/react";
import { CONTACT_US_WAYS } from "@src/components/layout/contact-us/constants";

const currentYear = new Date().getFullYear();

export default function FooterApp() {
    return (
        <footer className="py-8 space-y-8">
            <Divider />

            <div className="container mx-auto space-y-14">
                <div className="flex justify-between items-center">
                    <div className="flex-center gap-3">
                        <LogoApp size={"45"} />
                        <span className="text-headline-24 text-[1.15rem] text-foreground">{Env.NEXT_PUBLIC_APP_NAME}</span>
                    </div>

                    <ul className="flex-center gap-3" role="list">
                        {
                            HEADER_APP_MENU_ITEMS.map((item, key) => (
                                <li key={key} role="listitem">
                                    <Link key={key} href={item.url} className="inline-block leading-8 px-3">{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>

                    <div className="ring-2 ring-gray-700 rounded-md px-5 py-3 flex-center gap-5">
                        <span className="text-body-16 font-medium">Mantenha-se conectado</span>
                        <ul className="flex items-center gap-3">
                            {
                                SOCIAL_MEDIA_LINKS.map((media, index) => (
                                    <li key={index} className="">
                                        <Link href={media.url}>
                                            <span className="rounded-md size-14 bg-gray-800 ring ring-gray-700/85 flex-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,86,252,0.13)_0%,transparent_75%)]" />
                                                <Icon icon={media.icon} color="transparent" fontSize={"1.85rem"} style={{ color: "var(--primary-900)" }} />
                                            </span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <Divider />
                
                <div className="w-full flex justify-between">
                    <ul className="flex items-center gap-3">
                       {
                        CONTACT_US_WAYS.map((contact, index) => (
                            <li key={index} className="">
                                <Link href={contact.url} className="inline-flex items-center gap-2">
                                    <Icon icon={contact.icon} className="text-primary" fontSize={"1.25rem"} />
                                    <span className="text-body-14">{contact.label}</span>
                                </Link>
                            </li>
                        ))
                       } 
                    </ul>
                    
                    <div className="">
                        <p className="text-body-14 text-gray-400">
                            &copy; {currentYear} {Env.NEXT_PUBLIC_APP_NAME}. Todos direitos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
