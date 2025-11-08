import { ComponentPropsWithRef, FC, ReactNode } from "react";

interface ContainerHomePageProps extends Partial<Omit<ComponentPropsWithRef<"article">, "title">> {
    title: string | ReactNode;
    description: string | ReactNode;
    urlBannerImage?: string;
}

const ContainerHomePage: FC<ContainerHomePageProps> = ({ ref, children, title, description, ...props }) => {
    return (
        <article ref={ref} {...props}>
            <div className=""> {/* AQUI VAI FICAR O BANNER DE BACKGROUND */}
                <div className="container mx-auto">
                    <div className="min-h-64 flex flex-col items-center justify-center gap-1 text-center">
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
        </article>
    );
}

ContainerHomePage.displayName = "ContainerHomePage";
export default ContainerHomePage;