'use client';
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function SignoutBtn() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/signin" })}
      className="lg:mt-auto lg:p-3 lg:pr-5 p-1 max-w-8 sm:max-w-28 lg:max-w-32 sm:gap-2 bg-primary flex items-center justify-center text-white rounded-3xl transition-opacity duration-300 hover:opacity-80">
      <Image src="/logout.svg" alt="sign out" width={26} height={26} className="" />
      <span className="hidden sm:block text-sm lg:text-base">
        Sign out
      </span>
    </button>
  )
}