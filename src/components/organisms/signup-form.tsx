import { cn } from "@lib/utils";
import { Button } from "@atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@atoms/card";
import { Input } from "@atoms/input";
import { Label } from "@atoms/label";

export function SignupForm({
  className,
  onFormSubmit,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  onFormSubmit?: (formData: FormData) => void;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>
            Enter your email and a password below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name="password" required />
              </div>
              <Button
                type="submit"
                className="w-full"
                formAction={onFormSubmit}
              >
                Create an Account
              </Button>
              <Button variant="outline" className="w-full">
                Create an Account with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
