//== Eleventy Config File ==//

const { DateTime } = require('luxon');
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");

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
	// Pretty date (ex.: May 14, 2022) for pages
	eleventyConfig.addFilter('readableDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
		  'DDD'
		);
	});
	
	// year-month-day date for blog post URLs
	eleventyConfig.addFilter('urlDate', (dateObj) => {
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
			'yyyy-MM-dd'
		);
	});
	
	// current year for footer copyright lol
	eleventyConfig.addShortcode("copyrightyear", () => `${new Date().getFullYear()}`);
	
	// emoji read time calculator for blog posts, because why the hell not?
	eleventyConfig.addPlugin(emojiReadTime, {
		showEmoji: false,
		label: "minute read",
		wpm: 225,
		bucketSize: 3,
	});
	
	// cache busting filter source: https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/
	eleventyConfig.addFilter("bust", (url) => {
	  const [urlPart, paramPart] = url.split("?");
	  const params = new URLSearchParams(paramPart || "");
	  params.set("v", DateTime.local().toFormat("X"));
	  return `${urlPart}?${params}`;
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