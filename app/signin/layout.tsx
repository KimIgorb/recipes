import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Next Recipes | Auth",
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-screen">
      <div className="container flex flex-col justify-center gap-10 lg:flex-row lg:gap-0 h-full">
        <div className="flex items-center justify-center lg:w-1/2">
          <Image src="/logo.svg" width={420} height={375} alt="logo" className="w-auto h-auto" priority />
        </div>
        {children}
      </div>
    </main>
  );
}