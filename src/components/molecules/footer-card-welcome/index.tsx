import CardBox from "@src/components/atoms/card-container";
import Divider from "@src/components/atoms/divider";
import LogoApp from "@src/components/atoms/logo";
import Env from "@src/config/environment";
import Link from "next/link";

export default function FooterCardWelcome() {
    return (
        <section className="">
            <div className="w-full">
                <Divider /> 
            </div>

            <article className="container mx-auto pt-8">
                <div className="p-16 space-y-12">
                    <div className="flex items-center gap-7 flex-col @md:flex-row">
                        <div className="flex-none size-28">
                            <LogoApp size={"100%"} />
                        </div>
                        <div className="flex-1 text-center @md:text-start space-y-3">
                            <h1 className="text-headline-24 font-medium text-gray-200">
                                Hoje, a {Env.NEXT_PUBLIC_APP_NAME} continua a prosperar como uma agência líder de produtos digitais...
                            </h1>
                            <p className="text-body-16 text-gray-300">
                                Combinando o poder do design, engenharia e gerenciamento de projetos para criar experiências digitais transformadoras. Eles convidam você a se juntar a eles em sua jornada e descobrir como podem ajudar a dar vida às suas ideias digitais.
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <CardBox className="w-auto">
                            <div className="flex items-center justify-center gap-7 flex-col @md:flex-row @md:text-start">
                                <span className="text-gray-400 text-center">
                                    Bem-vindo à {Env.NEXT_PUBLIC_APP_NAME}
                                </span>
                                <p className="bg-gray-600 px-3 py-3 rounded-sm text-gray-200 text-center">
                                    Onde a colaboração, a experiência e o foco no cliente se cruzam para moldar o futuro da inovação digital.
                                </p>
                                <Link href={""} className="px-0 @md:px-5 py-3 w-full @md:w-auto bg-primary rounded-sm text-body-14 font-medium text-center">
                                    Começar Projecto
                                </Link>
                            </div>
                        </CardBox>
                    </div>
                </div>
            </article>
        </section>
    );
}
