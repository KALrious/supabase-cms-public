import { clsx } from "clsx";

type HeadingProps = {
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  dark?: boolean;
} & React.ComponentPropsWithoutRef<
  "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>;

export function Heading({
  className,
  as: Element = "h2",
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "text-4xl font-medium tracking-tighter text-pretty data-dark:text-white sm:text-6xl",
        dark ? "text-white" : "text-gray-950"
      )}
    />
  );
}

export function Subheading({
  className,
  as: Element = "h2",
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400"
      )}
    />
  );
}

export function Lead({
  className,
  dark = false,
  ...props
}: React.ComponentPropsWithoutRef<"p"> & { dark?: boolean }) {
  return (
    <p
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "text-2xl font-medium text-gray-500",
        dark ? "text-gray-200" : "text-gray-500"
      )}
      {...props}
    />
  );
}
