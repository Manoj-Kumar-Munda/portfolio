import type { NextConfig } from "next";
import withMDX from "@next/mdx";

//next config setup for next-mdx-remote

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [{ loader: "@svgr/webpack", options: { icon: true } }],
        as: "*.js",
      },
    },
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-images-1.medium.com",
      },
    ],
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply file loader for ?url usage (e.g., import logoUrl from './logo.svg?url')
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Default: treat .svg as React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
    );

    // Exclude .svg from the original file loader
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

const with_MDX = withMDX({
  extension: /\.mdx?$/,
  options: {},
});

export default with_MDX(nextConfig);
