/** @type {import('next').NextConfig} */

const nextConfig =  {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
          },
        },
      ],
    });
    return config;
  },
  images: {
    domains: ['img.sori883.dev'],
    disableStaticImages: true,
  },
  compiler: {
    emotion: true
  }
};

const buildConfig = _phase => {
  const plugins = [];
  const config = plugins.reduce((acc, next) => next(acc), {
    ...nextConfig
  });
  return config;
};


module.exports = buildConfig();