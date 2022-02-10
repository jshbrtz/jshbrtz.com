//== Eleventy Config File ==//

module.exports = function (eleventyConfig) {
  // Add passthrough directories & files
  eleventyConfig.addPassthroughCopy("./src/style/");
  eleventyConfig.addPassthroughCopy("./src/img/");

  /* Markdown-It 'markdownify' filter
	source: BradCoffield/kidlitconnection@e42a6de)
  */
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