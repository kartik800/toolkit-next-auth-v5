"use server"

import bcrypt from "bcryptjs"
import   { RegisterSchema, RegisterSchemaType } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: RegisterSchemaType) => {
    const validatedField = RegisterSchema.safeParse(values);

    if(!validatedField.success){
        return {error: "Invalid fields!"}

    }

    const {email, password, name} = validatedField.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if(existingUser){
        return {error: "Email Already Exist"}
    }

    await db.user.create({
        data: {
            email,
            name,
            password: hashedPassword
        }
    });

    // Todo: Sent verification token email

    return {success: "User Created"}
}