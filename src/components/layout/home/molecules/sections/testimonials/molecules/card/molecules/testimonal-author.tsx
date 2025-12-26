import { Button } from "@src/components/ui/button";
import { TestimonialAuthor } from "@src/services/testimonials/types";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialAuthorCard({ role, siteUrl, username, imageUrl }: TestimonialAuthor) {
    return (
        <div className="w-full py-5 rounded-md ring ring-gray-700/95 bg-gray-700/5 overflow-hidden grid grid-cols-1 @md:grid-cols-2 min-w-0">
            <div className="space-x-5 flex items-center pl-5">
                <div className="size-14 overflow-hidden rounded-md">
                    <Image 
                        alt={`Foto de ${username}`}
                        src={imageUrl}
                        width={300}
                        height={300}
                        className="aspect-square object-cover"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-body-16 font-bold">
                        { username }
                    </h1>
                    <h1 className="text-body-14 font-normal">
                        { role }
                    </h1>
                </div>
            </div>
            <div className="hidden @md:flex justify-end items-center pr-7">
                <Button variant={"default"} className="bg-gray-700 px-7 py-2" asChild>
                    <Link href={siteUrl}>
                        Abrir website
                    </Link>
                </Button>
            </div>
        </div>
    );
}
