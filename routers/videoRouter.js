const videoRouter = require('express').Router();
const routes = require('../routes');
const videoController = require('../controllers/videoController');
const middlewares = require('../middlewares');

videoRouter.get(routes.uploadVideo, videoController.getUpload);
videoRouter.post(routes.uploadVideo, middlewares.uploadVideo, videoController.postUpload);
videoRouter.get(routes.videoDetail(), videoController.detail);

videoRouter.get(routes.editVideo(), videoController.getEdit);
videoRouter.post(routes.editVideo(), videoController.postEdit);

videoRouter.get(routes.deleteVideo(), videoController.videoDelete);

module.exports = videoRouter;