/** @type {import('next').NextConfig} */
const nextConfig = {}

const openLibrary = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'books.google.com',
          port: '',
          pathname: '/books/**',
        },
      ],
    }
}

module.exports = nextConfig
module.exports = openLibrary
