import { Fragment } from "react/jsx-runtime";
import HeaderApp from "../header";
import HeroComponent from "./molecules/hero";
import TrustedCompaniesComponent from "./molecules/trust-companies";

export default function HomePage() {
    return (
        <Fragment>
            <HeaderApp />
            <section className="w-full h-[calc(100vh-(var(--header-height)))]">
                <HeroComponent />
                <TrustedCompaniesComponent />
            </section>
        </Fragment>
    );
}
