import HeaderApp from "@src/components/layout/header";
import HomePage from "@src/components/layout/home";
import FooterApp from "@src/components/molecules/footer";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <Fragment>
      <HeaderApp />
      <HomePage />
      <FooterApp />
    </Fragment>
  );
}
