import { clsx } from "clsx";

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "bg-gradient-to-tl from-sky-300 from-28% via-emerald-500 via-70% to-green-500 sm:bg-linear-145"
      )}
    />
  );
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          "absolute -top-44 -right-60 h-60 w-[36rem] transform-gpu md:right-0",
          "bg-gradient-to-tl from-sky-300 from-28% via-emerald-500 via-70% to-green-500",
          "rotate-[-10deg] rounded-full blur-3xl"
        )}
      />
    </div>
  );
}
