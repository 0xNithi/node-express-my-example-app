const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const articleRoute = require('./article.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/articles',
    route: articleRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
