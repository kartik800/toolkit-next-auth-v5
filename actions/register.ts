"use server"

import { RegisterSchema, RegisterSchemaType } from "@/schemas";

export const register = async (values: RegisterSchemaType) => {
    const validatedField = RegisterSchema.safeParse(values);

    if(!validatedField.success){
        return {error: "Invalid fields!"}

    }

    return {success: "Emain Sent!"}
}