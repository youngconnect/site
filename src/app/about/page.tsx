import AboutPage from "@src/components/layout/about";
import HeaderApp from "@src/components/layout/header";
import FooterApp from "@src/components/molecules/footer";
import { Fragment } from "react/jsx-runtime";

export default function About() {
    return (
        <Fragment>
            <HeaderApp />
            <AboutPage />
            <FooterApp />
        </Fragment>
    );
}
