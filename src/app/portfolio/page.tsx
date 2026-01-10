import HeaderApp from "@src/components/layout/header";
import PortfolioPage from "@src/components/layout/portfolio";
import FooterApp from "@src/components/molecules/footer";
import { Fragment } from "react/jsx-runtime";

export default function Portfolio() {
    return (
        <Fragment>
            <HeaderApp />
            <PortfolioPage />
            <FooterApp />
        </Fragment>
    );
}
