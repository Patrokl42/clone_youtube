const videoRouter = require('express').Router();
const routes = require('../routes');
const videoController = require('../controllers/videoController');

videoRouter.get(routes.videoDetail, videoController.detail);
videoRouter.get(routes.editVideo, videoController.edit);
videoRouter.get(routes.deleteVideo, videoController.videoDelete);
videoRouter.get(routes.uploadVideo, videoController.upload);

module.exports = videoRouter;