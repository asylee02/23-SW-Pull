/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const config = {
  reactStrictMode: true,
  images: {
    domains: ['k.kakaocdn.net', 'ec2-15-164-214-132.ap-northeast-2.compute.amazonaws.com', 'www.greenpeace.org'],
  },
};
const webpack = {
  devServer: {
    port: 3000,
    open: false,
  },
};

const nextConfig = withPWA({
  dest: 'public',
})(config, webpack);

module.exports = nextConfig;
