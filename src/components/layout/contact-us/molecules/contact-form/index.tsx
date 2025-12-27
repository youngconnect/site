"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContactUsType, schemaFormContactUs } from "./schema";
import { Input } from "@src/components/ui/input";
import RangeSlider from "./molecules/price-range";
import { ComponentProps, FC, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@src/components/ui/form";
import { cn } from "@src/utils";
import { Checkbox } from "@src/components/ui/checkbox";
import { Label } from "@src/components/ui/label";
import CardBox from "@src/components/atoms/card-container";
import { Textarea } from "@src/components/ui/textarea";
import { Button } from "@src/components/ui/button";

type InputStyled = ComponentProps<"input">;
const InputStyled: FC<InputStyled> = ({ placeholder, className, ...props }) => (
    <Input
        placeholder={placeholder || "Digite aqui..."}
        className={cn(
            "px-0 border-0 border-b border-b-gray-500 focus-visible:ring-0 rounded-none",
            className
        )}
        {...props}
    />
);

const checkboxOptions = [
    { id: "web_design", label: "Web Design", value: 1 },
    { id: "collaboration", label: "Colaboração", value: 2 },
    { id: "mobile_development", label: "Desenvolvimento Mobile", value: 3 },
    { id: "web_development", label: "Desenvolvimento Web", value: 4 },
    { id: "others", label: "Outros", value: 5 },
];

export default function ContactUsForm() {
    const [range, setRange] = useState<[number, number]>([150000, 10000000]);
    const form = useForm<FormContactUsType>({
        resolver: zodResolver(schemaFormContactUs),
        mode: "onSubmit",
        defaultValues: {
            fullname: "",
            email: "",
            services: [1],
            priceInterval: range,
            message: "",
        }
    });

    // Handlers
    const onSubmit = (fields: FormContactUsType) => {
        console.log(fields);
    }

    return (
        <div className="p-10 @md:max-w-[65%] mx-auto">
            <Form {...form}>
                <form 
                    id="form-contact-us" 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-10"
                >
                    <div className="grid grid-cols-1 @md:grid-cols-2 gap-10 w-full">
                        <CardBox className="w-auto">
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-headline-20 text-xl">Nome da companhia</FormLabel>
                                        <FormControl>
                                            <InputStyled type="text" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardBox>

                        <CardBox className="w-auto">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-headline-20 text-xl">Email</FormLabel>
                                        <FormControl>
                                            <InputStyled type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardBox>
                    </div>

                    <CardBox className="w-auto">
                        <h6 className="text-headline-20 text-xl">Por que você está nos contatando?</h6>
                        <FormField
                            control={form.control}
                            name="services"
                            render={() => (
                                <FormItem>
                                    <div className="grid grid-cols-1 @md:grid-cols-2 gap-4">
                                        {checkboxOptions.map((option) => (
                                            <FormField
                                                key={option.id}
                                                control={form.control}
                                                name="services"
                                                render={({ field }) => {
                                                    return (
                                                        <FormItem className="flex items-center gap-3 space-y-0">
                                                            <FormControl>
                                                                <Checkbox
                                                                    id={option.id}
                                                                    checked={field.value?.includes(option.value as (1 | 2 | 3 | 4 | 5))}
                                                                    onCheckedChange={(checked) => {
                                                                        const currentValues = field.value || [];
                                                                        if (checked) {
                                                                            field.onChange([...currentValues, option.value]);
                                                                        } else {
                                                                            field.onChange(
                                                                                currentValues.filter((value) => value !== option.value)
                                                                            );
                                                                        }
                                                                    }}
                                                                    className="size-5 border-gray-600"
                                                                />
                                                            </FormControl>
                                                            <Label
                                                                htmlFor={option.id}
                                                                className="text-body-18 text-sm font-normal cursor-pointer"
                                                            >
                                                                {option.label}
                                                            </Label>
                                                        </FormItem>
                                                    );
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardBox>

                    <CardBox className="w-auto">
                        <h6 className="text-headline-20 text-xl">Qual o orçamento?</h6>
                        <FormField
                            control={form.control}
                            name="priceInterval"
                            render={({ field, }) => (
                                <FormItem>
                                    <div className="w-full">
                                        <RangeSlider
                                            min={150000}
                                            max={70000000}
                                            value={range}
                                            onValueChange={(value) => {
                                                const [initial, final] = value;
                                                setRange([initial, final]);
                                                field.onChange([initial, final]);
                                            }}
                                            className="rounded-sm bg-primary-400"
                                        />
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardBox>

                    <CardBox className="w-auto">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-headline-20 text-xl">Mensagem</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            className="min-h-8 px-0 border-0 border-b border-b-gray-500 focus-visible:ring-0 rounded-none"
                                            placeholder="Digite aqui..." {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardBox>

                    <div className="flex justify-center px-5 @md:px-0">
                        <Button type="submit" className="text-headline-20 w-full @md:w-auto @md:px-12">Enviar</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
