const defaultHtmlLoaderOptions = {
    minimize: true,
    conservativeCollapse: false
}

module.exports = htmlLoaderOptions => (nextConfig = {}) => {
    htmlLoaderOptions = htmlLoaderOptions || defaultHtmlLoaderOptions

    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            config.module.rules.push({
                test: /\.html$/,
                loader: 'html-loader',
                options: htmlLoaderOptions
            })

            if (typeof nextConfig.webpack === 'function') {
                return nextConfig.webpack(config, options)
            }

            return config
        }
    })
}
