"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const urlImageList = [
    "https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340",
    "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340",
    "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2148",
    "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2424",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1936"
];

export default function CarrouselChain() {
    const element = useRef<HTMLUListElement | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2340");

    useEffect(() => {
        const result = urlImageList[getRandomIntInclusive(0, urlImageList.length - 1)];
        setImageUrl(result);

        if (!element.current) {
            return;
        }

        const speed = 1.75;
        let frame: number = 0;
        let scrollPosition: number = Math.random() * 100;

        const scrollLoop = () => {
            if (!element.current) {
                return;
            }

            // if (scrollPosition >= (element.current.scrollHeight - element.current.clientHeight)) {
            if (scrollPosition >= (element.current.scrollHeight / 2)) {
                scrollPosition = 0;
            }
            
            scrollPosition += speed;
            element.current.scrollTop = scrollPosition;
            frame = requestAnimationFrame(scrollLoop);
        }

        // Init
        frame = requestAnimationFrame(scrollLoop);
        const handleMouseEnter = () => cancelAnimationFrame(frame);
        const handleMouseLeave = () => (frame = requestAnimationFrame(scrollLoop));

        // DOM Events
        element.current.addEventListener('mouseenter', handleMouseEnter);
        element.current.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(frame);
            element.current?.removeEventListener('mouseenter', handleMouseEnter);
            element.current?.removeEventListener('mouseleave', handleMouseLeave);
            element.current = null;
        }
    }, []);

    return (
        <ul ref={element} className="flex flex-col gap-3 overflow-auto scrollbar-hide">
            {
                Array.from({ length: 10 })
                    .map((_, index) => (
                        <li key={index} className="shadow-md p-0.5">
                            <div className="overflow-hidden size-full rounded-sm ring-2 ring-gray-300">
                                <Link href={""}>
                                    <Image
                                        alt="Imagem"
                                        width={500}
                                        height={500}
                                        loading="eager"
                                        src={imageUrl}
                                        className="aspect-2/3 object-cover"
                                    />
                                </Link>
                            </div>
                        </li>
                    ))
            }
        </ul>
    )
}
