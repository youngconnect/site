import { cn } from "@src/utils";
import { ComponentProps } from "react"

type DividerProps = ComponentProps<"hr">;
export default function Divider({ className, ...props }: DividerProps) {
    return (
        <hr className={cn("w-full border-t border-gray-700", className)} {...props} />
    );
}