import Link from "next/link";
import { labelList } from "./constants";
import { Fragment } from "react/jsx-runtime";

export default function HeroContent() {
    return (
        <div className="flex-none w-full @md:w-2/5 @md:px-6 pt-12">
            <div className="size-full flex flex-col justify-center gap-12">
                <h1 className="
                        text-headline-64 @md:text-headline-48 text-center @md:text-start
                        w-5/6 @md:w-full mx-auto
                    "
                >
                    Estratégia, Tecnologia e Resultados
                </h1>

                <div className="
                        w-5/6 @md:w-full mx-auto h-20 overflow-hidden
                        rounded-sm flex-center ring ring-gray-200 dark:ring-gray-700/70 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-lg
                    "
                >
                    <p className="@md:flex items-center hidden gap-1">
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
                    <p 
                        className="text-center text-gray-400 @md:hidden flex items-center gap-1"
                    >
                        Para Startups, Médias & Pequenas, Líderes empresariais e Causa Social.
                    </p>
                </div>
                
                <div className="
                        flex items-center justify-center @md:justify-start gap-3
                        w-5/6 mx-auto @md:w-3/5 @md:mx-0
                    "
                >
                    <Link href={""} className="flex-1 py-3 px-5 rounded-sm ring ring-gray-200 dark:ring-gray-700/70 bg-gray-100 dark:bg-gray-800/80 backdrop-blur-lg text-center">
                        Nossos Projectos
                    </Link>
                    <Link href={""} className="flex-1 py-3 px-5 rounded-sm ring ring-gray-200 dark:ring-gray-700/70 bg-primary dark:bg-primary backdrop-blur-lg text-center">
                        Contactar-nos
                    </Link>
                </div>
            </div>
        </div>
    );
}
