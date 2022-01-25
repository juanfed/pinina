const withImages = require('next-images');
module.exports = withImages({
	images: {
		loader: 'imgix',
		path: 'https://example.com/myaccount/'
	},
	env: {
		NEXT_PUBLIC_BACKEND_URL: 'http://localhost:4001'
	}
});
