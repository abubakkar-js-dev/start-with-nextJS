/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "fakestoreapi.com",
            port: "", // Optional, use only if required
            pathname: "/img/**", // Matches all images under /img/
          },
        ],
      },
};

export default nextConfig;
