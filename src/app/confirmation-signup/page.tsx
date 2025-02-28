import ButtonLink from "@/atoms/button-link";
import { Card } from "@atoms/card";
import {
  ArrowLeftCircleIcon,
  CheckCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { GradientBackground } from "@molecules/gradient-background";

const ConfirmationSignupPage = () => {
  return (
    <main className="overflow-hidden bg-gray-50 text-black">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white ring-1 shadow-md ring-black/5">
          <Card className="max-w-md w-full p-8">
            <div className="text-center">
              <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h1 className="text-2xl font-bold tracking-tight mb-2">
                Account Created Successfully!
              </h1>
              <p className="text-muted-foreground mb-6">
                Thank you for creating your account. We&apos;ve sent a
                confirmation email to your inbox. Please check your email and
                click the verification link to get started.
              </p>

              <div className="p-4 bg-muted rounded-lg mb-6">
                <EnvelopeIcon className="mx-auto h-6 w-6 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground">
                  Haven&apos;t received the email? Check your spam folder or
                  wait a few minutes. The email should arrive shortly.
                </p>
              </div>

              <div className="space-y-4">
                <ButtonLink href="/" variant="outline" className="w-full">
                  <ArrowLeftCircleIcon className="mr-2 h-4 w-4" />
                  Return to Home
                </ButtonLink>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default ConfirmationSignupPage;
