import ContainerHomePage from "../home/molecules/container-homepage";
import { PortfolioContainer } from "./molecules/portfolio-container";

export default function PortfolioPage() {
    return (
        <main className="@container">
            <ContainerHomePage
                title="Nossos Trabalhos"
                description="Descubra um portfólio de projetos digitais visualmente impressionantes e estrategicamente trabalhados que mostram nossa criatividade e experiência."
                urlBannerImage="https://images.unsplash.com/photo-1509701246627-15f55746157d?q=80&w=1529&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
                <PortfolioContainer />
            </ContainerHomePage>
        </main>
    );
}
