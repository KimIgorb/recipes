import { GithubButton, GoogleButton } from "@/UI/signin-btns";

export default function Page() {
  return (
    <div className=" flex flex-col items-center justify-center lg:w-1/2 lg:pb-10 lg:border-l-2">
      <div>
        <h1 className="mb-10 text-7xl font-semibold text-primary">Sign in</h1>
        <GoogleButton />
        <GithubButton />
      </div>
    </div>
  );
}
