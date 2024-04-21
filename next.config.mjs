/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    async redirects() {
        return [
          {
            source: '/en',
            destination: '/',
            permanent: true,
          },
        ];
    }
};

export default nextConfig;
