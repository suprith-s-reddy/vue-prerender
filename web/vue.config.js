const SitemapPlugin = require('sitemap-webpack-plugin')
const sitemapJSON = require('./public/sitemap.json')

module.exports = {
  configureWebpack: {
    plugins: [
      new SitemapPlugin.default(process.env.VUE_APP_CLIENT_URL, sitemapJSON.routes, {
        filename: 'sitemap.xml'
      })
    ]
  }
}
