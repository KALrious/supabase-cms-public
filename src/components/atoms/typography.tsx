import clsx from "clsx";
import { ReactNode } from "react";

const Typography = ({
  children,
  htmlTag,
  className,
  isBlack,
}: {
  children: ReactNode;
  htmlTag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  isBlack?: boolean;
}) => {
  const Tag = htmlTag;
  return (
    <Tag
      className={clsx(
        "text-xl/7 font-medium sm:text-2xl/8",
        className,
        isBlack ? "text-gray-950" : "text-white"
      )}
    >
      {children}
    </Tag>
  );
};

export default Typography;
