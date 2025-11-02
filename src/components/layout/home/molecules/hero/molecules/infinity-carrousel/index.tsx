import CarrouselChain from "./molecules/carrousel-chain";

export default function InfinityCarrousel() {
    return (
        <div className="flex-1">
            <div className="size-full overflow-hidden rounded-l-md">
                <div className="relative size-full flex-center">
                    <div className={"absolute size-[1350px] grid grid-cols-5 gap-3 rotate-45"}>
                        <CarrouselChain />
                        <CarrouselChain />
                        <CarrouselChain />
                        <CarrouselChain />
                        <CarrouselChain />
                        {/* <div className="absolute inset-0 bg-linear-to-r from-[rgb(5,10,20)]/85 from-5% to-transparent" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

function CarrouselItem() {

}