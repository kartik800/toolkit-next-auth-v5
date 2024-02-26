"use client"

import CardWrapper from "./card-wrapper";
import { LoginSchema, LoginSchemaType } from "@/schemas";
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
import { login } from "@/actions/login";

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (values: LoginSchemaType) => {
    setError("");
    setSuccess("");

    startTransition(()=> {
      login(values).then((data)=> {
          setError(data?.error);
          setSuccess(data?.success);
      })
      
    }) 
  }

  return (
    <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't Have an account?"
        backButtonHref="/auth/register"
        showSocial
    >
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
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
          Login
        </Button>
      </form>
    </Form>

    </CardWrapper>
  )
}

export default LoginForm;