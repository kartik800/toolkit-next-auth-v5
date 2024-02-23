"use client"

import CardWrapper from "./card-wrapper";
import {RegisterSchema, RegisterSchemaType } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import {useForm} from "react-hook-form"
import { Input } from "../ui/input";

import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
 } from "../ui/form";
import { Button } from "../ui/button";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { register } from "@/actions/register";

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    }
  });

  const onSubmit = (values: RegisterSchemaType) => {
    setError("");
    setSuccess("");

    startTransition(()=> {
      register(values).then((data)=> {
        setError(data.error);
        setSuccess(data.success);
      })
      
    }) 
  }

  return (
    <CardWrapper
        headerLabel="Create an account"
        backButtonLabel="Already Have an account?"
        backButtonHref="/auth/login"
        showSocial
    >
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="name" disabled={isPending} placeholder="name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled={isPending} placeholder="name@example.com"  type="email"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" disabled={isPending} placeholder="******" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        
        </div>

        <FormError message={error}/>
        <FormSuccess message={success}/>

        <Button disabled={isPending} type="submit"
        className="w-full"
        >
          Create an account
        </Button>
      </form>
    </Form>

    </CardWrapper>
  )
}

export default RegisterForm;