const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");
const autoPrefixer = require("autoprefixer");
const preCss = require("precss");
const postcssImport = require("postcss-import");
const tailwindcss = require("tailwindcss"); // Correct require statement for Tailwind CSS

module.exports = {
  plugins: [
    postcssImport(),
    preCss(),
    tailwindcss(),
    autoPrefixer(),
    postcssPresetEnv({
      stage: 0,
    }),
    cssnano({
      preset: "default",
    }),
  ],
};
