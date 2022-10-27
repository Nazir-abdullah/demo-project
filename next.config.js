const { withPlugins, optional } = require("next-compose-plugins");
const { PHASE_PRODUCTION_BUILD } = require("next/constants");
const withPWA = require("next-pwa");

const nextConfig = {
    compiler: {
        styledComponents: true
    },
    async headers() {
        return [
            {
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=15778476, stale-while-revalidate"
                    }
                ],
                source: "/(.*).(svg|jpg|jpeg|png|webp)"
            },
            {
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31556952, stale-while-revalidate"
                    }
                ],
                source: "/fonts/.woff2"
            }
        ];
    },
    images: {
        domains: [
            "images.ctfassets.net",
            "encrypted-tbn0.gstatic.com",
            "images.unsplash.com",
            "raw.githubusercontent.com",
            "rickandmortyapi.com"
        ]
    },
    productionBrowserSourceMaps: true,
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true
    },
    reactStrictMode: true
};

module.exports = withPlugins(
    [
        [
            optional(() =>
                require("@next/bundle-analyzer")({
                    enabled: process.env.ANALYZE === "true"
                })
            ),
            [PHASE_PRODUCTION_BUILD]
        ],
        [withPWA]
    ],
    nextConfig
);
