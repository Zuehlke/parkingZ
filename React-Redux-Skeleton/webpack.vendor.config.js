module.exports = {
    entry: {
        vendor: [
            "react-bootstrap",
            "react-redux",
            "react-router",
            "redux",
            "redux-observable",
            "bootstrap",
            "rxjs",
            "jquery"
        ]
    },
    output: {
        filename: "vendor.js",
        path: __dirname + "/dist",
        library: "vendor_dll" 
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "vendor-manifest.json"),
            name: 'vendor_dll'
        }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ],
    resolve: {
        extensions: [".js", ".css"]
    },
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.js$/, loader: "script-loader" }
        ]
    }
};