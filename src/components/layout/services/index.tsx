import ContainerHomePage from "../home/molecules/container-homepage";
import { ServiceContainer } from "./molecules/service-container";

export default function ServicePage() {
    return (
        <main className="@container">
            <ContainerHomePage
                title="Nossos Serviços"
                description="Transforme sua marca com nossas soluções digitais inovadoras que cativam e envolvem seu público."
                urlBannerImage="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2588&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
                <ServiceContainer />
            </ContainerHomePage>
        </main>
    );
}
