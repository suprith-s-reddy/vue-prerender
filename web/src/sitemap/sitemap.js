const fs = require('fs')
const routes = require('../common/routes')

async function generateSitemap () {
  let links = []
  links = getVueRoutes()
  writeSlugsToSitemap(links)
};

function getVueRoutes () {
  const vueRoutes = Object.values(routes.paths)

  return vueRoutes
}

function writeSlugsToSitemap (routes) {
  try {
    fs.writeFileSync('./public/sitemap.json', JSON.stringify({
      routes: routes
    }), 'utf-8')
  } catch (err) {
    console.log(err)
  }
}

// Generating Sitemap.
generateSitemap()
