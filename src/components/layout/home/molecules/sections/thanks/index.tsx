import LogoApp from "@src/components/atoms/logo";
import ContactUsForm from "@src/components/layout/contact-us/molecules/contact-form";
import { Button } from "@src/components/ui/button";
import Env from "@src/config/environment";
import Link from "next/link";

export default function ThanksComponent() {
    return (
        <section>
            <article className="relative">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 z-2 bg-primary-900/15" />
                    <div 
                        className={"absolute inset-0 z-1 grayscale bg-center bg-no-repeat bg-cover opacity-30"}
                        style={{
                            backgroundImage: "url(https://images.unsplash.com/photo-1559249875-05d44554edd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340)"
                        }}
                    />
                </div>
                <div className="container mx-auto relative z-3">
                    <div className="flex items-center justify-center flex-col gap-10 min-h-135">
                        <div className="flex-center bg-background size-22 rounded-full ring ring-gray-700/35">
                            <LogoApp size={"45px"} />
                        </div>
                        <div className="text-center">
                            <h1 className="text-headline-32 font-medium">{`Obrigado pelo seu interesse na ${Env.NEXT_PUBLIC_APP_NAME}.`}</h1>
                            <p className="text-body-14 @md:w-[65%] @sm:w-[80%] mx-auto">Nós adoraríamos ouvir de você e discutir como podemos construir as suas ideias. Aqui estão as diferentes maneiras que você pode entrar em contato conosco.</p>
                        </div>
                        <div className="">
                            <Button variant={"default"} className="px-6 py-2" asChild>
                                <Link href={""}>Começar um Projecto</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </article>
            
            <article className="container mx-auto">
                <ContactUsForm />
            </article>
        </section>
    );
}
