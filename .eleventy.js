//== Eleventy Config File ==//

const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
	// Add passthrough directories & files
	
	let env = process.env.ELEVENTY_ENV;
	
		if (env === "prod") {
			eleventyConfig.addPassthroughCopy({ "./src/img/favicons_prod": "/" });
		}
		else if (env === "dev") {
			eleventyConfig.addPassthroughCopy({ "./src/img/favicons_dev": "/" });
	}
		
	eleventyConfig.addPassthroughCopy("./src/style/");
	eleventyConfig.addPassthroughCopy("./src/img/");
	eleventyConfig.addPassthroughCopy("./src/font/");
	eleventyConfig.addPassthroughCopy("./_headers");
	
	// Luxon date parser filter source: moment.github.io/luxon/
	eleventyConfig.addFilter('readableDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
		  'DDD'
		);
	  });
	
	// Markdown-It 'markdownify' filter source: BradCoffield/kidlitconnection@e42a6de)
	const md = require("markdown-it")({
		html: true,
		linkify: true,
		typographer: true,
	});
	
	eleventyConfig.addFilter("markdownify", (markdownString) =>
	md.render(markdownString)
	);
	
	// Manual passthrough template extensions
	return {
		dir: {
  			input: "src",
  			output: "dist",
		},
		markdownTemplateEngine: "njk",
		dataTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
};