import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? "/mitanshi-research-docket" : "",
  assetPrefix: isGithubPages ? "/mitanshi-research-docket" : undefined,
};

export default nextConfig;
