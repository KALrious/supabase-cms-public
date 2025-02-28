import { GradientBackground } from "@molecules/gradient-background";
import type { Metadata } from "next";
import { SignupForm } from "@/organisms/signup-form";
import { signup } from "./actions";

export const metadata: Metadata = {
  title: "Signup",
  description: "Create an account to continue.",
};

export default function Login() {
  return (
    <main className="overflow-hidden bg-gray-50 text-black">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white ring-1 shadow-md ring-black/5">
          <SignupForm onFormSubmit={signup} />
        </div>
      </div>
    </main>
  );
}
