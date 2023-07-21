/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        //domains:["cdn.racingnews365.com"]
    },
    content: ["./src/**/*.{html,js}"],

    experimental: {
        esmExternals: false, // THIS IS THE FLAG THAT MATTERS
    },
}

module.exports = nextConfig
