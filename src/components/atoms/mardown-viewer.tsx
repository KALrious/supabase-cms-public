import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const components = {
  // Blocks
  p: ({ children }: { children: ReactNode }) => (
    <p className="my-10 text-base/8 first:mt-0 last:mb-0">{children}</p>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">
      {children}
    </h3>
  ),
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">
      {children}
    </blockquote>
  ),

  // Lists
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc pl-4 text-base/8 marker:text-gray-400">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
      {children}
    </ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>
  ),

  // Inline formatting
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold text-gray-950">{children}</strong>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <>
      <span aria-hidden>`</span>
      <code className="text-[15px]/8 font-semibold text-gray-950">
        {children}
      </code>
      <span aria-hidden>`</span>
    </>
  ),
  a: ({ href, children }: { href: string; children: ReactNode }) => (
    <Link
      href={href || "#"}
      className="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-hover:decoration-gray-600"
    >
      {children}
    </Link>
  ),

  // Custom components can be added here and used in MDX
  Image: ({ src, alt }: { src: string; alt: string }) => (
    <div className="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl relative overflow-hidden">
      <Image alt={alt || ""} src={src} layout="fill" objectFit="cover" />
    </div>
  ),
  Separator: ({ style }: { style: "line" | "space" }) => {
    switch (style) {
      case "line":
        return <hr className="my-8 border-t border-gray-200" />;
      case "space":
        return <div className="my-8" />;
      default:
        return null;
    }
  },
};

const MarkdownViewer = ({ source }: { source: MDXRemoteProps["source"] }) => {
  return <MDXRemote source={source} components={components} />;
};

export default MarkdownViewer;
