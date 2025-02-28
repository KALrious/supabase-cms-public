import { clsx } from "clsx";
import React, { ReactNode } from "react";

const Title = ({
  children,
  className,
  htmlTag,
  isBlack,
}: {
  children: ReactNode;
  className?: string;
  isBlack?: boolean;
  htmlTag: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) =>
  React.createElement(
    htmlTag,
    {
      className: clsx(
        "font-display font-medium tracking-tight text-balance sm:text-8xl/[0.8] md:text-9xl/[0.8] text-6xl/[0.9]",
        className,
        isBlack ? "text-gray-950" : "text-white"
      ),
    },
    children
  );
export default Title;
