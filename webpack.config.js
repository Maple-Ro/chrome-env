const pkg = require( './package.json' );
const webpack = require( 'webpack' );

module.exports = {
  entry : './libs/chrome' ,
  output : {
    path : './dist' ,
    filename : 'chrome.js' ,
    library : 'Chrome' ,
    libraryTarget : 'umd'
  } ,
  module : {
    loaders : [
      {
        test : /\.js$/ ,
        exclude : [ /node_modules/ ] ,
        loader : 'babel' ,
        query : {
          presets : [ 'es2015' ] ,
          plugins : [ 'transform-runtime' ]
        }
      }
    ]
  } ,
  plugins : [
    new webpack.BannerPlugin(
      'chrome.js v' + pkg.version + '\n' +
      '' + pkg.homepage + '\n' +
      'Copyright 2015 ' + pkg.author + '\n' +
      'Licensed under ' + pkg.license , { entryOnly : true } )
  ] ,
  watch : true ,
  devtool : '#source-map'
};
