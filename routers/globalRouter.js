const globalRouter = require('express').Router();
const routes = require('../routes');
const userController = require('../controllers/userController');
const videoController = require('../controllers/videoController');

globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.join, userController.join);
globalRouter.get(routes.login, userController.login);
globalRouter.get(routes.logout, userController.logout);
globalRouter.get(routes.search, videoController.search);

module.exports = globalRouter;