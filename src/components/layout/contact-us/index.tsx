import CardBox from "@src/components/atoms/card-container";
import ContainerHomePage from "../home/molecules/container-homepage";
import FAQComponent from "../home/molecules/sections/faq";
import { CONTACT_US_WAYS } from "./constants";
import ContactUsForm from "./molecules/contact-form";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Divider from "@src/components/atoms/divider";
import FooterCardWelcome from "@src/components/molecules/footer-card-welcome";

export default function ContactUsPage() {
    return (
        <main className="@container">
            <ContainerHomePage
                title="Contactar-nos"
                description="Entre em contato conosco hoje e deixe-nos ajudá-lo com quaisquer perguntas ou dúvidas que você possa ter."
                urlBannerImage="https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
                <article className="container mx-auto">
                    <div className="p-10">
                        <div className="flex-center flex-col @md:flex-row gap-5">
                            {
                                CONTACT_US_WAYS.map((contact, index) => (
                                    <CardBox key={index} className="w-full @md:w-auto py-0 px-0">
                                        <Link href={contact.url} className="flex items-center justify-center gap-3 leading-14 px-5 whitespace-nowrap">
                                            <Icon icon={contact.icon} />
                                            <span className="">{contact.label}</span>
                                        </Link>
                                    </CardBox>
                                ))
                            }
                        </div>
                    </div>
                </article>

                <article className="">
                    <Divider />
                </article>

                <article className="container mx-auto">    
                    <ContactUsForm />
                </article>
            </ContainerHomePage>
            
            <FAQComponent />

            <FooterCardWelcome />
        </main>
    );
}
