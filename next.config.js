const withImages = require('next-images');
module.exports = withImages({
	images: {
		loader: 'imgix',
		path: 'https://example.com/myaccount/'
	},
	env: {
		/* NEXT_PUBLIC_BACKEND_URL: 'http://186.31.70.3:2021' */
		NEXT_PUBLIC_BACKEND_URL: 'http://localhost:4001'
	}
});
