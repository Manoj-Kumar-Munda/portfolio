import type { NextConfig } from "next";
import withMDX from "@next/mdx";

//next config setup for next-mdx-remote

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
    ],
  },
};

const with_MDX = withMDX({
  extension: /\.mdx?$/,
  options: {},
});

export default with_MDX(nextConfig);
