import { client } from "@src/lib/client";
import type { FAQ, Response, FAQFilters } from "./types";
import { FAQ as FAQ_FAKER } from "@src/shared/faker/faq";

const baseUrl = "/faq";
export const FAQService = {
    getAllFAQ: async (filters?: Partial<FAQFilters>): Promise<FAQ[]> => {
        try {
            // const { data } = await client.get<Response>(baseUrl, { params: filters });
            // return data?.data || [];
            return FAQ_FAKER.slice(0, filters?.limit || FAQ_FAKER.length);
        } catch (error) {
            throw error;
        }
    }
}
