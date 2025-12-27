"use client";

import Link from "next/link";
import { cn } from "@src/utils";
import { Activity } from "react";
import ListItem from "../../list-item";
import LogoApp from "@src/components/atoms/logo";
import { HEADER_APP_MENU_ITEMS } from "../../../constants";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@src/components/ui/navigation-menu";

type IsMobileHeaderProps = {}

export default function IsMobileHeader(props: IsMobileHeaderProps) {
    return (
        <div className="size-full flex @md:hidden justify-between items-center">
            <span>Mobile</span>
        </div>
    );
}
