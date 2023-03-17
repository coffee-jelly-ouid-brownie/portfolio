
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/meerkat/portfolio/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/meerkat/portfolio/src/pages/about.js")),
  "component---src-pages-first-post-js": preferDefault(require("/home/meerkat/portfolio/src/pages/first-post.js")),
  "component---src-pages-index-js": preferDefault(require("/home/meerkat/portfolio/src/pages/index.js"))
}

