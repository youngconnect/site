"use client";

import IsDesktopHeader from "./molecules/responsive/is-desktop";
import IsMobileHeader from "./molecules/responsive/is-mobile";

export default function HeaderApp() {
    return (
        <header className="w-full h-(--header-height)">
            <div className="container mx-auto h-full">
                <IsDesktopHeader />
                <IsMobileHeader  />
            </div>
        </header>
    );
}
