import clsx from "clsx";
import { ReactNode } from "react";

const SectionContainer = ({
  children,
  id,
  hasNoMargin,
  className,
  isSubsection = false,
}: {
  children: ReactNode;
  id?: string;
  hasNoMargin?: boolean;
  className?: string;
  isSubsection?: boolean;
}) => (
  <section
    className={clsx(
      "flex justify-center z-10 relative px-2",
      hasNoMargin && "m-2 mb-32",
      className
    )}
    id={id}
  >
    <div
      className={clsx(
        "max-w-screen-xl w-full mx-2 lg:mx-0",
        isSubsection ? "py-8 lg:py-12 " : "py-20 lg:py-32"
      )}
    >
      {children}
    </div>
  </section>
);
export default SectionContainer;
