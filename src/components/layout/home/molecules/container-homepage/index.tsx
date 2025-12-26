import { ComponentPropsWithRef, FC, ReactNode } from "react";

interface ContainerHomePageProps extends Partial<Omit<ComponentPropsWithRef<"section">, "title">> {
    title: string | ReactNode;
    description: string | ReactNode;
    urlBannerImage?: string;
}

const ContainerHomePage: FC<ContainerHomePageProps> = ({ ref, children, title, description, urlBannerImage, ...props }) => {
    return (
        <section ref={ref} {...props}>
            <div className="relative">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 z-2 bg-primary-900/15" />
                    <div 
                        className={"absolute inset-0 z-1 grayscale bg-center bg-no-repeat bg-cover opacity-30"}
                        style={urlBannerImage ? { backgroundImage: `url(${urlBannerImage})` } : undefined}
                    />
                </div>
                <div className="container mx-auto relative z-3">
                    <div className="min-h-72 flex flex-col items-center justify-center gap-1 text-center">
                        { 
                            typeof title === "string" ? 
                                <h1 className="text-headline-40">{title}</h1>
                                : title // As Element
                        }
                        { 
                            typeof description === "string" ? 
                                <p className="text-body-14 @md:w-[40%] @sm:w-[80%]">{description}</p>
                                : description // As Element
                        }
                    </div>
                </div>
            </div>
            { children }
        </section>
    );
}

ContainerHomePage.displayName = "ContainerHomePage";
export default ContainerHomePage;