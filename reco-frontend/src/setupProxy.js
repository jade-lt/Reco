const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(proxy('/api', { target: 'https:/localhost/9000' }));

    app.use(proxy('/tmdb', { target: 'https://api.themoviedb.org/' }));
}