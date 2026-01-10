import Env from "@src/config/environment";
import ContainerHomePage from "../home/molecules/container-homepage";
import { Fragment } from "react/jsx-runtime";
import { ProcessContainer } from "./molecules/process-container";

export default function ProcessPage() {
    return (
        <main className="@container">
            <ContainerHomePage
                title={"Processo para Início do Projeto"}
                description={`Na ${Env.NEXT_PUBLIC_APP_NAME}, valorizamos a transparência, a colaboração e o fornecimento de resultados excepcionais.`}
                urlBannerImage={"https://images.unsplash.com/photo-1632772998001-cc9bf6f7c852?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            >
                <ProcessContainer />
            </ContainerHomePage>
        </main>
    );
}