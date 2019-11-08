const join = (req, res) => res.send('Join');
const login = (req, res) => res.send('Login');
const logout = (req, res) => res.send('Logout');
const users = (req, res) => res.send('Users');
const userDetail = (req, res) => res.send('Users Detail');
const editProfile = (req, res) => res.send('Edit Profile');
const changePassword = (req, res) => res.send('Change Password');

module.exports = {
  join: join,
  login: login,
  logout: logout,
  users: users,
  userDetail: userDetail,
  editProfile: editProfile,
  changePassword: changePassword
}