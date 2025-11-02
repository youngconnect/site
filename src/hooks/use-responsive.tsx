"use client";

import { useEffect, useState } from "react";

type useResponsiveDeviceProps = {
    query: string;
}
export default function useResponsiveDevice(props?: useResponsiveDeviceProps) {
    const [isResponsive, setIsResponsive] = useState<boolean>(false);

    useEffect(() => {
        const { matches } = window.matchMedia((props?.query || "(width<768px)"));
        setIsResponsive(matches);
    }, []);

    return isResponsive;
}
