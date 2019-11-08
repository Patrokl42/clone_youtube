const home = (req, res) => res.send('Home');
const search = (req, res) => res.send('Search');
const videos = (req, res) => res.send('Videos');
const upload = (req, res) => res.send('Upload');
const detail = (req, res) => res.send('Video Detail');
const edit = (req, res) => res.send('Video Edit');
const videoDelete = (req, res) => res.send('Video Delete');

module.exports = {
  home: home,
  search: search,
  videos: videos,
  upload: upload,
  detail: detail,
  edit: edit,
  videoDelete: videoDelete
}