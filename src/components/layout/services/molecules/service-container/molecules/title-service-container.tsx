import { Activity } from "react";
import { Fragment } from "react/jsx-runtime";
import Divider from "@src/components/atoms/divider";

type TitleServiceContainerProps = {
    title: string;
    isFirst?: boolean;
}
export default function TitleServiceContainer({ title, isFirst = false }: TitleServiceContainerProps) {
    return (
        <Fragment>
            <Activity mode={isFirst ? "visible" : "hidden"}>
                <Divider />
            </Activity>

            <div className="container mx-auto">
                <div className="p-10 flex justify-center @min-lg:justify-start">
                    <h2 className="text-gray-400 text-headline-24 font-medium">{title}</h2>
                </div>
            </div>

            {/* <Divider /> */}
        </Fragment>
    );
}