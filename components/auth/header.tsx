"use client";
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
})

interface HeaderProps {
    label: string,
}
const Header = ({label}: HeaderProps) => {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center w-full">
        <h1 className={cn("text-3xl font-semibold", font.className)}>
            Auth
        </h1>
        <p className="text-muted-foreground text-sm">
            {label}
        </p>
    </div>
  )
}

export default Header