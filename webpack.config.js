const path = require("path");

module.exports = {
    mode: "none",
    entry: {
        app: [
            "babel-polyfill",
            "./src/app.js"
        ]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "app.bundle.js"
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modu;es/,
            loader: "babel-loader"
        }]
    }
}