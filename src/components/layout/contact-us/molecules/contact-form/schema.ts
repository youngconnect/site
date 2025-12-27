import z from "zod";

const errorMessages = {
    fullname: "O campo nome é obrigatório",
    email: "O email é obrigatório",
    services: "Selecione pelo menos um serviço",
    priceInterval: "",
    message: "Explique pra nós, como podemos ajudar",
}

export const schemaFormContactUs = z.object({
    fullname: z.string({ error: errorMessages.fullname }).min(1, { error: errorMessages.fullname }),
    email: z.email({ error: errorMessages.email }).min(1, { error: errorMessages.email }),
    services: z.array(z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]))
        .min(1, { message: errorMessages.services }),
    priceInterval: z.array(z.number()),
    message: z.string().optional(),
});

export type FormContactUsType = z.infer<typeof schemaFormContactUs>;
