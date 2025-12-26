import { Testimonial } from "@src/services/testimonials/types";
import TestimonialAuthorCard from "./molecules/testimonal-author";

export default async function TestimonialCard({ title, content, author }: Testimonial) {
    return (
        <div className={"flex flex-col items-center justify-between space-y-10 ring ring-gray-800/65 p-10"}>
            <div className="space-y-7">
                <h1 className="text-headline-24 font-medium text-primary-800">{title}</h1>
                <p className="text-body-14">{content}</p>
            </div>
            <TestimonialAuthorCard {...author} />
        </div>
    );
}
