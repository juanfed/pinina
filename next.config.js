const withImages = require('next-images');
module.exports = withImages({
	images: {
		disableStaticImages: true
	},
	env: {
		NEXT_PUBLIC_BACKEND_URL: 'http://localhost:4001/'
		// NEXT_PUBLIC_BACKEND_URL: 'http://186.31.70.3:2021/'
	}
});
