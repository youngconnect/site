import { client } from "@src/lib/client";
import { Testimonial, TestimonialFilters } from "./types";
import { TESTIMONIALS } from "@src/shared/faker/testimonials";

const baseUrl = "/testimonials";
export const testimonialService = {
    getAllTestimonials: async (filters?: Partial<TestimonialFilters>): Promise<Testimonial[]> => {
        try {
            // const { data } = await client.get(baseUrl, { params: filters });
            // return data?.data || [];
            return TESTIMONIALS;
        } catch (error) {
            throw error;
        }
    }
}
