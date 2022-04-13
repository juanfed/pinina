const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withPWA = require('next-pwa');


module.exports = withPlugins(
	[
		[withImages, {
			images: {
				disableStaticImages: true
			},
			env: {
				NEXT_PUBLIC_BACKEND_URL: 'http://localhost:4001/'
				// NEXT_PUBLIC_BACKEND_URL: 'http://186.31.70.3:2021/'
			}
		}],
		[withPWA, {
			reactStrictMode: true,
			pwa: {
				dest: "public",
				register: true,
				skipWaiting: true,
				disable: process.env.NODE_ENV === 'development'
			}
		}]
	]
)