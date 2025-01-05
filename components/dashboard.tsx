import { authConfig } from "@/configs/auth";
import SignoutBtn from "@/UI/signout-btn";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Navbar from "./navbar";

export default async function Dashboard() {

  const session = await getServerSession(authConfig);

  return (
    <div className="border-b lg:border-b-0 lg:border-r-2 flex lg:flex-col lg:justify-normal lg:items-start items-center justify-between py-3 lg:h-screen lg:py-7 lg:pr-11">
      {session && (
        <div className="flex items-center gap-2 lg:flex-col lg:items-start lg:gap-0 lg:mb-24">
          <Image
            src={session?.user?.image as string || '/user-photo.svg'}
            alt="user image"
            width={96}
            height={96}
            priority={true}
            className="rounded-full w-full max-w-10 lg:max-w-16"
          />
          <div>
            <h1 className="font-bold text-sm hidden lg:text-xl sm:block">{session?.user?.name}</h1>
            <p className="font-normal text-xs hidden lg:text-sm text-secondary sm:block">{session?.user?.email}</p>
          </div>
        </div>
      )}
      <div className="flex items-center lg:items-start gap-3 sm:gap-6 lg:flex-col lg:h-4/5">
        <Navbar />
        <SignoutBtn />
      </div>
    </div>
  )
}