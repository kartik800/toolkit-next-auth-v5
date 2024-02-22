import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    // don't use .min() validation in login 
    // because there might be case of pre-stored data of user
    // so better practice is to use .min() validation on signup side
    password: z.string(),   
});