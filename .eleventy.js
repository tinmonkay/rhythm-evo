module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./css/");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addWatchTarget("./css/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "public",
    },
  };
};
