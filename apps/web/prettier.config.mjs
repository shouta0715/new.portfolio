import config from "../../prettier.config.mjs";

export default {
  ...config,
  tailwindStylesheet: "./styles/globals.css",
  plugins: ["prettier-plugin-tailwindcss"],
};
