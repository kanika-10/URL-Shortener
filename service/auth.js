const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const secret = "kanika$10$08$";
function setUser(user) {
  // sessionIdToUserMap.set(id, user);
  return jwt.sign(
    {
      _id: user.id,
      email: user.email,
      role: user.role,
    },
    secret
  );
}

function getUser(token) {
  console.log(token);
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
  // return sessionIdToUserMap.get(id);
}

module.exports = {
  setUser,
  getUser,
};
