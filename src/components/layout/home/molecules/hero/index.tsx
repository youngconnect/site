import InfinityCarrousel from "./molecules/infinity-carrousel";
import HeroContent from "./molecules/content";

export default function HeroComponent() {
    return (
        <article className="size-full flex gap-5 flex-wrap">
            <HeroContent />
            <InfinityCarrousel />
        </article>
    );
}
