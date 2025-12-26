"use client";

import LogoApp from "@src/components/atoms/logo";
import { HEADER_APP_MENU_ITEMS } from "./constants";
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@src/components/ui/navigation-menu";
import ListItem from "./molecules/list-item";
import { cn } from "@src/utils";
import { Button } from "@src/components/ui/button";
import { useMediaQuery } from "react-responsive";

export default function HeaderApp() {
    const isMobile = useMediaQuery({ maxWidth: 640 });
    
    return (
        <header className="w-full h-(--header-height)">
            <div className="container mx-auto h-full">
                <div className="size-full flex justify-between items-center">
                    <div className="">
                        <Link href={"/"} className="flex-center p-2 rounded-sm">
                            <LogoApp size={"2.5vw"} />
                        </Link>
                    </div>
                    <NavigationMenu viewport={isMobile}>
                        <NavigationMenuList className="flex-wrap rounded-full [&>li:first-of-type>a]:rounded-l-full [&>li:last-of-type>a]:rounded-r-full bg-gray-200 dark:bg-gray-700">
                            {
                                HEADER_APP_MENU_ITEMS.map((item, index) => {
                                    if (item.submenu && item.submenu.length>0) {
                                        return (
                                            <NavigationMenuItem key={index} className="Delcio">
                                                <NavigationMenuTrigger className="bg-transparent py-1 rounded-none hover:text-white">{item.label}</NavigationMenuTrigger>
                                                <NavigationMenuContent className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                                                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                        <li className="row-span-3">
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href="/"
                                                                    className="from-muted/50 to-muted flex flex-col justify-end aspect-square rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md hover:text-white"
                                                                >
                                                                    <div className="mb-2 text-lg font-medium sm:mt-4">
                                                                        shadcn/ui
                                                                    </div>
                                                                    <p className="text-muted-foreground text-sm leading-tight">
                                                                        Beautifully designed components built with Tailwind CSS.
                                                                    </p>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                        <ListItem href="/docs" title="Introduction">
                                                            Re-usable components built using Radix UI and Tailwind CSS.
                                                        </ListItem>
                                                        <ListItem href="/docs/installation" title="Installation">
                                                            How to install dependencies and structure your app.
                                                        </ListItem>
                                                        <ListItem href="/docs/primitives/typography" title="Typography">
                                                            Styles for headings, paragraphs, lists...etc
                                                        </ListItem>
                                                    </ul>
                                                </NavigationMenuContent>
                                            </NavigationMenuItem>
                                        )
                                    }

                                    return (
                                        <NavigationMenuItem key={index}>
                                            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent py-1 rounded-none hover:text-white")}>
                                                <Link href={item.url}>{item.label}</Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    );
                                })
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="">
                        <Button className="bg-primary py-1 px-5 rounded-full" asChild>
                            <Link href={""}>
                                Experimentar agora
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
