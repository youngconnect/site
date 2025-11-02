"use client";

import { ComponentProps } from "@shared/@types/global-props";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const queryClient = new QueryClient({});

export default function GlobalProvider({ children }: ComponentProps) {
   return (
      <QueryClientProvider client={queryClient}>
         <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
         >
            {children}
         </NextThemesProvider>
      </QueryClientProvider>
   );
}
