import Link from "next/link";
import { SOCIAL_MEDIA_LINKS } from "../../constants";
import { Icon } from "@iconify/react";
import { ComponentProps } from "react";
import { cn } from "@src/utils";

type CardContactProps = ComponentProps<"div"> & {};

export default function CardContact({ className, ...props }: CardContactProps) {
    return (
        <div className={cn("w-full @min-lg:w-auto px-5 @min-lg:px-0", className)} {...props}>
            <div className="ring-2 ring-gray-700 rounded-md px-5 py-4 flex-center gap-5 flex-col @min-lg:flex-row">
                <span className="text-body-16 font-medium">Mantenha-se conectado</span>
                <ul className="flex items-center gap-3">
                    {
                        SOCIAL_MEDIA_LINKS.map((media, index) => (
                            <li key={index} className="">
                                <Link href={media.url}>
                                    <span className="rounded-md size-14 bg-gray-800 ring ring-gray-700/85 flex-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,86,252,0.13)_0%,transparent_75%)]" />
                                        <Icon icon={media.icon} color="transparent" fontSize={"1.85rem"} style={{ color: "var(--primary-900)" }} />
                                    </span>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
