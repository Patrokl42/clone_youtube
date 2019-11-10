const globalRouter = require('express').Router();
const routes = require('../routes');
const userController = require('../controllers/userController');
const videoController = require('../controllers/videoController');

globalRouter.get(routes.login, userController.getLogin);
globalRouter.post(routes.login, userController.postLogin);

globalRouter.get(routes.join, userController.getJoin);
globalRouter.post(routes.join, userController.postJoin);

globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.logout, userController.logout);
globalRouter.get(routes.search, videoController.search);

module.exports = globalRouter;