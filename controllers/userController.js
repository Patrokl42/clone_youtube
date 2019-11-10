const routes = require('../routes');

const getJoin = (req, res) => {
  res.render('join', { pageTitle: "Join" });
};

const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render('join', { pageTitle: "Join" });
  } else {
    // Todo: Register User
    // Todo: Log User
    res.redirect(routes.home);
  }
};
const getLogin = (req, res) => {
  res.render('login', { pageTitle: "Login" });
}
const postLogin = (req, res) => {
  res.redirect(routes.home)
}
const logout = (req, res) => {
  // Todo: Procces Log Out
  res.redirect(routes.home);
};
const userDetail = (req, res) => res.render('userDetail', { pageTitle: "User Detail" });
const editProfile = (req, res) => res.render('editProfile', { pageTitle: "Edit Profile" });
const changePassword = (req, res) => res.render('changePassword', { pageTitle: "Change Password" });

module.exports = {
  getJoin: getJoin,
  postJoin: postJoin,
  logout: logout,
  userDetail: userDetail,
  editProfile: editProfile,
  changePassword: changePassword,
  postLogin: postLogin,
  getLogin: getLogin
}