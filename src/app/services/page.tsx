import HeaderApp from "@src/components/layout/header";
import ServicePage from "@src/components/layout/services";
import FooterApp from "@src/components/molecules/footer";
import { Fragment } from "react/jsx-runtime";

export default function Service() {
    return (
        <Fragment>
            <HeaderApp />
            <ServicePage />
            <FooterApp />
        </Fragment>
    );
}
