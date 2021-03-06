module.exports = {
  options: {
    quoteChar: '\'',
    singleModule: true,
    base: 'app',
    rename: function (moduleName) {
      return moduleName.replace(/src\/[a-zA-Z0-9]*\//g, 'views/');
    }
  },
  htmlmin: {
    options: {
      htmlmin: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    },
    src: ['app/src/{,*/}/*.html'],
    dest: '.tmp/concat/scripts/templates.js'
  },
}
