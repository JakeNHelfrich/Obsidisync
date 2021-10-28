const path = require("path");

module.exports =  {
    mode: 'production',
    entry: './Obsidisync.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                },
                exclude: '/node_modules/',
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs',
    },
    externals: {
        obsidian: "commonjs2 obsidian",
    }
}