import { Fragment } from "react/jsx-runtime";
import Link from "next/link";
import { Button } from "@src/components/ui/button";
import { labelList } from "./constants";

export default function HeroContent() {
    return (
        <div className="flex-none w-2/5 px-6">
            <div className="size-full flex flex-col justify-center gap-12">
                <h1 className="text-headline-48">
                    {/* <b>Estratégia, Tecnologia e Resultados</b>{" "}<span className="text-body-18 font-normal">- Nós construímos</span> */}
                    Estratégia, Tecnologia e Resultados
                </h1>
                <div className="w-full h-20 rounded-sm flex-center ring ring-gray-200 dark:ring-gray-700/70 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-lg overflow-hidden">
                    <p className="flex-center gap-1">
                        Para
                        {
                            labelList.map((label, index, arr) => (
                                <Fragment key={index}>
                                    <span className="bg-gray-200 dark:bg-gray-700/30 px-2 py-2 rounded-sm" key={index}>{label}</span>
                                    { 
                                        index === (arr.length - 2) ? "e" : 
                                            ((arr.length - 1) !== index) ? "," : null
                                    }
                                </Fragment>
                            ))
                        }
                    </p>
                </div>
                <div className="flex gap-3">
                    <Link href={""} className="py-3 px-5 rounded-sm ring ring-gray-200 dark:ring-gray-700/70 bg-gray-100 dark:bg-gray-800/80 backdrop-blur-lg">
                        Projectos Realizados
                    </Link>
                    <Button className="rounded-sm" asChild>
                        <Link href={""}>Contactar-nos</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
