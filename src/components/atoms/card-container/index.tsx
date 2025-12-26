import { cn } from "@src/utils";
import { ComponentPropsWithRef, FC } from "react";

type CardBoxProps = ComponentPropsWithRef<"div">;
const CardBox: FC<CardBoxProps> = ({ className, ref, children, ...props }) => {
    return (
        <div 
            ref={ref}
            className={cn(
                "bg-gray-700/45 ring ring-gray-600/65 rounded-md",
                "w-full px-7 py-5 space-y-7",
                className
            )}
            {...props}
        >
            { children }
        </div>
    );
}

export default CardBox;
