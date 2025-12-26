import InfinityCarrousel from "./molecules/infinity-carrousel";
import HeroContent from "./molecules/content";

export default function HeroComponent() {
    return (
        <section className="w-full h-[calc(100vh-(var(--header-height)))]">
            <article className="size-full flex flex-col @md:flex-row gap-5">
                <HeroContent />
                <InfinityCarrousel />
            </article>
        </section>
    );
}
