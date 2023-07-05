const { User } = require("../db");
const bcrypt = require('bcryptjs');

const postUserController = async (email, password, username, rol, image, provider) => {
  const saltRounds = 10;
  if (password) password = await bcrypt.hash(password, saltRounds);
  const user = await User.findOrCreate({
    where: { email },
    defaults: { 
      password,
      username,
      rol,
      image,
      provider
    }
  });

  return user;
};

module.exports = postUserController;
