import LogoApp from "@src/components/atoms/logo";
import Link from "next/link";

export default function BringServiceBanner() {
    return (
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
                <div className="@min-lg:w-2/3 flex flex-col items-center text-center gap-3">
                    <h1 className="text-headline-32">
                        Deixe-nos trazer suas ideias para a vida no mundo digital.
                    </h1>
                    <p className="@min-lg:w-3/4">
                        Independentemente dos serviços que escolher, estamos empenhados em oferecer resultados excepcionais que excedam as suas expectativas. Nossa equipe multidisciplinar trabalha em conjunto para garantir uma colaboração perfeita e uma visão unificada para o seu produto digital.
                    </p>
                </div>
                <div className="inline-flex">
                    <Link href={""} className="bg-primary px-7 py-4 rounded-md text-body-16 font-medium capitalize">Iniciar Projeto</Link>
                </div>
            </div>
        </article>
    );
}
