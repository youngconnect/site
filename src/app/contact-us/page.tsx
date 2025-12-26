import ContactUsPage from "@src/components/layout/contact-us";
import HeaderApp from "@src/components/layout/header";
import FooterApp from "@src/components/molecules/footer";
import { Fragment } from "react/jsx-runtime";

export default function ContactUs() {
    return (
        <Fragment>
            <HeaderApp />
            <ContactUsPage />
            <FooterApp />
        </Fragment>
    );
}
