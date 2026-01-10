import { cn } from "@src/utils";
import { ComponentProps } from "react";

type ContainerServiceTitleProps = Omit<ComponentProps<"div">, "title"> & {
    title: string;
    description: string;
    message: string;
}
export function ContainerServiceTitle({ title, description, message, children, className, ...props }: ContainerServiceTitleProps) {
    return (
        <div 
            className={cn("size-full @min-lg:pt-14 border-x border-x-gray-700", className)}
            {...props}
        >
            <div className="pt-10 flex flex-col space-y-10">
                {/* TITLE */}
                <div className="px-10 space-y-12 flex flex-col items-start">
                    <div className="space-y-1 @min-lg:max-w-3/4">
                        <h1 className="text-headline-40">{title}</h1>
                        <p className="text-body-16 text-gray-200">{description}</p>
                    </div>
                    <span className="px-5 py-3 bg-gray-700 rounded-sm text-body-16">{message}</span>
                </div>

                {/* CONTENT */}
                <div className="size-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
