const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withFonts, withImages], {
	env: {
		API: process.env.API,
		DOMAIN_API: process.env.DOMAIN_API
	}
});
