const { plugins } = require("./tailwind.config");

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "tailwindcss-react-native/babel",
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
