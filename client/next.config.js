/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build/.next',
    reactStrictMode: false,
    webpack5: true,
    swcMinify: false,
    sassOptions: {
        prependData: `
        @import "./src/client/assets/styles/general/_mixins.scss";
        `,
        _indentWidth: 4,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                and: [/\.(js|ts)x?$/],
            },

            use: ['@svgr/webpack'],
        });

        config.module.rules.push({
            test: /\.(mp4)/,
            use: {
                loader: 'url-loader', // this need file-loader
                options: {
                    limit: 50000,
                },
            },
        });

        return config;
    },

    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: `${process.env.NEXT_PUBLIC_SOCKET}/:path*`, // Proxy to Backend
            },
        ];
    },
};

module.exports = nextConfig;
