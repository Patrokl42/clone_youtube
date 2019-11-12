const routes = require('../routes')
const Video = require('../models/Video')

const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ id: -1 });
    res.render('home', { pageTitle: 'Home', videos })
  } catch (err) {
    console.log(err)
    res.render('home', { pageTitle: 'Home', videos: [] })
  }
}

const search = async (req, res) => {
  const { query: { term: searchingBy } } = req;
  let videos = [];
  try {
    videos = await Video.find({title: { $regex: searchingBy, $options: "i" }})
  } catch (err) {
    console.log(err);
  }
  res.render('search', { pageTitle: 'Search', searchingBy, videos })
}

const getUpload = (req, res) => res.render('upload', { pageTitle: 'Upload' })

const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req

  const newVideo = await Video.create({
    fileUrl: path,
    title: title,
    description: description
  })

  console.log(newVideo)
  res.redirect(routes.videoDetail(newVideo.id))
}

const detail = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const video = await Video.findById(id)
    console.log(video)
    res.render('detailVideo', { pageTitle: video.title, video })
  } catch (err) {
    res.redirect(routes.home)
  }
}

const getEdit = async (req, res) => {
  const {
    params:
      { id }
  } = req
  try {
    const video = await Video.findById(id)
    res.render('editVideo', { pageTitle: `Edit ${video.title}`, video })
  } catch (err) {
    res.redirect(routes.home)
  }
}

const postEdit = async (req, res) => {
  const {
    params:
      { id },
    body: { title, description }
  } = req
  try {
    await Video.findOneAndUpdate({ _id: id }, { title: title, description: description });
    res.redirect(routes.videoDetail(id));
  } catch (err) {
    res.redirect(routes.home)
  }
}

const videoDelete = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Video.findOneAndDelete({ _id: id });
  } catch (err) {}
  res.redirect(routes.home);
};

module.exports = {
  home: home,
  search: search,
  getUpload: getUpload,
  postUpload: postUpload,
  detail: detail,
  getEdit: getEdit,
  postEdit: postEdit,
  videoDelete: videoDelete
}