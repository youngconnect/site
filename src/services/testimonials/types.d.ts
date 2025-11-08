export type Response = {
    data: Testimonial[];
};

export type Testimonial = {
    title: string;
    content: string;
    author: TestimonialAuthor;
}

export type TestimonialAuthor = {
    role: string;
    siteUrl: string;
    imageUrl: string;
    username: string;
}

export type TestimonialFilters = {
    limit: number;
}
