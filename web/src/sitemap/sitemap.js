const axios = require('axios');
const fs = require('fs')
const routes = require('../common/routes')

async function generateSitemap () {
  let links = []
  links = getVueRoutes()
  // const blogsSlugsRes = await getBlogsSlugs();
  // links = links.concat(blogSlugs.data.data);
  writeSlugsToSitemap(links)
};

function getVueRoutes () {
  const vueRoutes = Object.values(routes.paths)
  return vueRoutes
}

// function getBlogsSlugs() {
//   return axios({
//       method: 'get',
//       url: `https://api.example.com/blogs/slugs/list` // your api url goes here
//   });
// };

function writeSlugsToSitemap (routes) {
  try {
    fs.writeFileSync('./public/sitemap.json', JSON.stringify({
      routes: routes
    }), 'utf-8')
  } catch (err) {
    console.log(err)
  }
}

generateSitemap()
