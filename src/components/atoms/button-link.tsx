import { ButtonProps, buttonVariants } from "@atoms/button";
import { cn } from "@lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

const ButtonLink = ({
  className,
  variant,
  size,
  href,
  children,
}: ButtonProps & { href: string; children: ReactNode }) => (
  <Link
    href={href}
    className={cn(buttonVariants({ variant, size, className }))}
  >
    {children}
  </Link>
);
export default ButtonLink;
