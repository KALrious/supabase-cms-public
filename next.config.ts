import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
    domains: [
      "images.unsplash.com",
      "localhost",
      "dlykwjhycczfqroxtwhs.supabase.co",
      "utfs.io",
      "nextjs.org",
    ],
  },
};

export default nextConfig;
