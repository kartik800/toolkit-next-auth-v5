"use client";

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "model" | "redirect",
    asChild?: boolean;
}

import { useRouter } from 'next/navigation';
import React from 'react'

const LoginButton = ({children, mode ="redirect", asChild}: LoginButtonProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push("/auth/login");
    }
    return (
    <span onClick={onClick} className='cursor-pointer'>
        {children}
    </span>
  )
}

export default LoginButton
