"use server"

import { LoginSchema, LoginSchemaType } from "@/schemas";

export const login = async (values: LoginSchemaType) => {
    const validatedField = LoginSchema.safeParse(values);

    if(!validatedField.success){
        return {error: "Invalid fields!"}

    }

    return {success: "Emain Sent!"}
}