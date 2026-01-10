import HeaderApp from "@src/components/layout/header";
import ProcessPage from "@src/components/layout/process";
import FooterApp from "@src/components/molecules/footer";
import { Fragment } from "react/jsx-runtime";

export default function Process() {
    return (
        <Fragment>
            <HeaderApp />
            <ProcessPage />
            <FooterApp />
        </Fragment>
    );
}