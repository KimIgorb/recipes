'use client';

import { signIn } from "next-auth/react";
import Image from "next/image";

export function GoogleButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/recipes" })}
      className="flex items-center p-4 gap-4 shadow-lg font-semibold border border-gray-200 mb-3 hover:shadow-current transition-shadow duration-500"
    >
      <Image src="/google.svg" width={30} height={30} alt="google icon" />
      Sign in with Google
    </button>
  )
}

export function GithubButton() {
  return (
    <button
      onClick={() => signIn("github", { callbackUrl: "/recipes" })}
      className="flex items-center p-4 gap-4 shadow-lg font-semibold border border-gray-200 hover:shadow-current transition-shadow duration-500"
    >
      <Image src="/github.svg" width={30} height={30} alt="github icon" />
      Sign in with Github
    </button>
  )
}