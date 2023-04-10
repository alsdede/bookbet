module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            _components: "./src/components",
            _screens: "./src/screens",
            _navigation: "./src/navigation",
            _theme: "./src/styles",
            _src: "./src",
          },
        },
      ],
    ],
  };
};
