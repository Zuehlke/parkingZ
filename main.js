!function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var t={};r.m=e,r.c=t,r.i=function(e){return e},r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},r.p="",r(r.s=495)}({495:function(e,r){(function(r){e.exports={entry:{vendor:["react-bootstrap","react-redux","react-router","redux","redux-observable","bootstrap","rxjs","jquery"]},output:{filename:"vendor.js",path:r+"/dist",library:"vendor_dll"},plugins:[new webpack.DllPlugin({path:path.join(r,"vendor-manifest.json"),name:"vendor_dll"}),new webpack.optimize.UglifyJsPlugin({compress:{warnings:!1}})],resolve:{extensions:[".js",".css"]},module:{rules:[{test:/\.css$/,loader:"style-loader!css-loader"},{test:/\.js$/,loader:"script-loader"}]}}}).call(r,"/")}});
//# sourceMappingURL=main.js.map