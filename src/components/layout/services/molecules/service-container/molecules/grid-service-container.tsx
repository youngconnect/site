import { ReactNode } from "react";
import { Icon } from "@iconify/react";

type GridItem = {
    icon: string | ReactNode;
    description: string;
}

type GridServiceContainerProps = {
    items: GridItem[];
}

export default function GridServiceContainer({ items }: GridServiceContainerProps) {
    return (
        <ul className="grid grid-cols-1 @min-lg:grid-cols-2 @lg:grid-cols-4" role="list">
            {
                items.map((item, index) => (
                    <li key={index} className="p-10 flex flex-col items-start gap-8 border-y not-last:border-r border-gray-700">
                        <div className="">
                            <span className="rounded-md size-18 bg-gray-800 ring ring-gray-700/85 flex-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(1,86,252,0.13)_0%,transparent_75%)]" />
                                {
                                    typeof item.icon === "string" ?
                                        <Icon icon={item.icon} color="transparent" fontSize={"1.95rem"} style={{ color: "var(--primary-900)" }} /> :
                                        item.icon
                                }
                            </span>
                        </div>
                        <div className="">
                            <p className="text-body-18 font-semibold">{item.description}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}