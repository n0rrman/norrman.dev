/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async redirects() {
        return [
          {
            source: '/',
            destination: '/en',
            permanent: true,
          },
        ];
    }
};

export default nextConfig;
