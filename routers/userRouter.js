const userRouter = require('express').Router();
const routes = require('../routes');
const userController = require('../controllers/userController');

userRouter.get(routes.users, userController.users);
userRouter.get(routes.userDetail, userController.userDetail);
userRouter.get(routes.editProfile, userController.editProfile);
userRouter.get(routes.changePassword, userController.changePassword);

module.exports = userRouter;