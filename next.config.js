/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
  },
  env: {
    mapbox_key:'pk.eyJ1Ijoia2Fpc2hpZ3VpIiwiYSI6ImNsM29uZWpieDA0bm0zYnBteTJsYm42M3cifQ.n_45FWnOdIJepp50Wwu1Jw'
  }
}

module.exports = nextConfig
