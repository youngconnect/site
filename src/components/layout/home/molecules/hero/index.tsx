import InfinityCarrousel from "./molecules/infinity-carrousel";
import HeroContent from "./molecules/content";

export default function HeroComponent() {
    return (
        <article className="size-full flex @sm:flex-col @md:flex-row gap-5">
            <HeroContent />
            <InfinityCarrousel />
        </article>
    );
}
