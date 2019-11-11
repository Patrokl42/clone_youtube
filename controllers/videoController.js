const routes = require('../routes');
const Video = require('../models/Video');

const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render('home', { pageTitle: 'Home', videos })
  } catch (err) {
    console.log(err);
    res.render('home', { pageTitle: 'Home', videos: [] })
  }
};

const search = (req, res) => {
  const { query: { term: searchingBy } } = req
  res.render('search', { pageTitle: 'Search', searchingBy, videos: db.videos })
};

const getUpload = (req, res) => res.render('upload', { pageTitle: 'Upload' });

const postUpload = (req, res) => {
  const {
    body: { name, file, description }
  } = req
  // Todo: Upload & save video
  res.redirect(routes.videoDetail(32112));
};

const detail = (req, res) => res.render('detailVideo', { pageTitle: 'Video detail' });
const edit = (req, res) => res.render('editVideo', { pageTitle: 'Edit Video' });
const videoDelete = (req, res) => res.render('deleteVideo', { pageTitle: 'Delete Video' });

module.exports = {
  home: home,
  search: search,
  getUpload: getUpload,
  postUpload: postUpload,
  detail: detail,
  edit: edit,
  videoDelete: videoDelete
}