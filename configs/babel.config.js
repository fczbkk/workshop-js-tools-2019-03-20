module.exports = function (api) {
  api.cache(false);
  return {
    'presets': [
      [
        '@babel/preset-env',
        {
          "targets": {
            "chrome": "70",
            "ie": "9"
          }
        }
      ]
    ]
  }
}
