const home = (req, res) => res.render('home', { pageTitle: "Home" });
const search = (req, res) => res.render('search', { pageTitle: "Search" });
const upload = (req, res) => res.render('upload', { pageTitle: "Upload" });
const detail = (req, res) => res.render('detailVideo', { pageTitle: "Video detail" });
const edit = (req, res) => res.render('editVideo', { pageTitle: "Edit Video" });
const videoDelete = (req, res) => res.render('deleteVideo', { pageTitle: "Delete Video" });

module.exports = {
  home: home,
  search: search,
  upload: upload,
  detail: detail,
  edit: edit,
  videoDelete: videoDelete
}