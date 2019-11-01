const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add("index", "/");
// routes.add("services", "/services/:payment-of-rent");
routes.add("personal-info", "/:q");
// routes.add('personal-info', '/:about(about|team|press-kit|contact-us|privacy-policy|terms|developers|api-providers|credits|cookie-policy|teams)')
// routes.add('category', '/category/:category/:page?')
// routes.add('collection', '/collection/:collection')
// routes.add('api', '/:dev/api/:apiSlugifiedName/:section?/:issueId?/:issueTitle?')
// routes.add('developer', '/user/:dev/:page(apis/published|apis/following|users/following|users/followed)?')
// routes.add('forceAuth', '/auth')
