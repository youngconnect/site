import HeroComponent from "./molecules/sections/hero";
import TrustedCompaniesComponent from "./molecules/sections/trust-companies";
import ServicesComponent from "./molecules/sections/services";
import WhyChooseUsComponent from "./molecules/sections/choose-us";
import TestimonialsComponent from "./molecules/sections/testimonials";
import FAQComponent from "./molecules/sections/faq";
import ThanksComponent from "./molecules/sections/thanks";

export default function HomePage() {
    return (
        <main className="@container">
            <HeroComponent />
            <TrustedCompaniesComponent />
            <ServicesComponent />
            <WhyChooseUsComponent />
            <TestimonialsComponent />
            <FAQComponent />
            <ThanksComponent />
        </main>
    );
}
