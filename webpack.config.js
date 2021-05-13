module.exports = {
    context: __dirname,
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    }
}