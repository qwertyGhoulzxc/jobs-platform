/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "rgrfblcglzmot5yb.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
