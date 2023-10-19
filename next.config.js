/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  basePath: "/solo",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
