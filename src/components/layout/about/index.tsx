import Env from "@src/config/environment";
import ContainerHomePage from "../home/molecules/container-homepage";
import Image from "next/image";
import LogoApp from "@src/components/atoms/logo";
import Divider from "@src/components/atoms/divider";
import FooterCardWelcome from "@src/components/molecules/footer-card-welcome";
import { GridItemServiceContainer } from "../process/molecules/process-container";
import { ABOUT_FLOW } from "./constants";

export default function AboutPage() {
    return (
        <main className="@container">
            <ContainerHomePage
                title="Sobre Nós"
                description={`Bem-vindo a ${Env.NEXT_PUBLIC_APP_NAME}, onde a colaboração, a experiência e o foco no cliente se cruzam para moldar o futuro da inovação digital.`}
                urlBannerImage="https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
                <article className="px-16">
                    <div className="border-x border-x-gray-700">
                        <div className="container mx-auto">
                            <div className="p-10">
                                <div className="grid grid-cols-1 @min-lg:grid-cols-2 place-items-center">
                                    <div className="p-10 space-y-5">
                                        <h2 className="text-foreground text-headline-40 font-bold">Quem Somos</h2>
                                        <p className="text-body-16 text-justify">
                                            {`${Env.NEXT_PUBLIC_APP_NAME} é uma agência de produtos digitais apaixonada por criar experiências digitais excepcionais. Somos especializados em design, engenharia e gestão de projetos, ajudando as empresas a prosperar no cenário digital. Na SquareUp, seguimos um processo estruturado e colaborativo para garantir a entrega bem-sucedida de produtos digitais excepcionais. Nosso processo combina as melhores práticas da indústria, pensamento criativo e uma abordagem centrada no cliente.`}
                                        </p>
                                    </div>
                                    <div className="p-10 relative">
                                        <div className="flex-center">
                                            <div className="absolute">
                                                <LogoApp size={"clamp(4.85rem, 7.5vw, 10.85vw)"} />
                                            </div>
                                            <Image
                                                src="https://images.unsplash.com/photo-1518481852452-9415b262eba4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="Quem Somos"
                                                width={500}
                                                height={500}
                                                className="rounded-md aspect-square object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <Divider />

                            <div className="p-10">
                                <h1 className="text-headline-40 font-bold">Nossa História</h1>
                            </div>
                        </div>

                        <ul
                            className="
                                size-full grid grid-cols-1 @min-lg:grid-cols-2
                                @min-lg:*:odd:border-r @min-lg:*:odd:border-r-gray-700
                            " 
                            role="list"
                        >
                            {
                                ABOUT_FLOW.map((process, index) => (
                                    <GridItemServiceContainer key={index} index={index + 1} {...process} />
                                ))
                            }
                        </ul>
                    </div>
                </article>
            </ContainerHomePage>

            <FooterCardWelcome />
        </main>
    );
}