import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { NavigationMenuLink } from "@src/components/ui/navigation-menu";
import { cn } from "@src/utils";

export default function ListItem({ title, children, href, className, ...props }: ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li className={cn("hover:text-white", className)} {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
