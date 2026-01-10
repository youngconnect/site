"use client";

import Link from "next/link";
import { cn } from "@src/utils";
import ListItem from "../../list-item";
import LogoApp from "@src/components/atoms/logo";
import { HEADER_APP_MENU_ITEMS } from "../../../constants";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@src/components/ui/navigation-menu";
import { Button } from "@src/components/ui/button";

export default function IsDesktopHeader() {
    return (
        <div className="size-full hidden @min-lg:flex justify-between items-center">
            <div className="">
                <Link href={"/"} className="flex-center p-2 rounded-sm">
                    <LogoApp size={"2.5vw"} />
                </Link>
            </div>
            
            <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex-wrap rounded-full [&>li:first-of-type>a]:rounded-l-full [&>li:last-of-type>a]:rounded-r-full bg-gray-200 dark:bg-gray-700">
                    {
                        HEADER_APP_MENU_ITEMS.map((item, index) => {
                            if (item.submenu && item.submenu.length>0) {
                                return (
                                    <NavigationMenuItem key={index} className="Delcio">
                                        <NavigationMenuTrigger className="bg-transparent py-1 rounded-none hover:text-white">{item.label}</NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                                            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">

                                                {
                                                    item.submenu.map((submenu, index) => {
                                                        if (index === 0) {
                                                            return (
                                                                <li className="row-span-3 flex-center py-2 px-0.5" key={index}>
                                                                    <NavigationMenuLink asChild>
                                                                        <Link
                                                                            href={submenu.url}
                                                                            className="from-muted/50 to-muted flex flex-col justify-end size-full rounded-md bg-linear-to-b p-2 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md hover:text-white"
                                                                        >
                                                                            <div className="mb-2 text-lg font-medium sm:mt-4">
                                                                                {submenu.label}
                                                                            </div>
                                                                            <p className="text-muted-foreground text-sm leading-tight">
                                                                                {submenu.description}
                                                                            </p>
                                                                        </Link>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            );
                                                        }

                                                        return (
                                                            <ListItem key={index} href={submenu.url} title={submenu.label}>
                                                                {submenu.description}
                                                            </ListItem>
                                                        );
                                                    })
                                                }
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
                <Button className="bg-primary py-1 px-5 rounded-md" asChild>
                    <Link href={""}>
                        Experimentar agora
                    </Link>
                </Button>
            </div>
        </div>
    );
}
