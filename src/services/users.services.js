const { User } = require("../models");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/jsonToken");

module.exports = {
  getUsers: async (req, res) => {
    try {
      const data = await User.findAll();
      if (!data.length) {
        return res.status(200).json({
          message: "Aú no hay usuarios",
          data: [],
        });
      }
      res.status(200).json({
        message: "Users list",
        data,
        hint: `Solicitado por ${req.payload.key}`,
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  },
  signInUser: async (req, res) => {
    const { name, lastName, email, password } = req.body;
    try {
      const user = User.findOne({ where: { email } });
      if (user) throw { code: 11000 };

      const response = await User.create({
        name,
        lastName,
        email,
        password,
        alias: "alias-temporal",
        options: "{}",
      });
      delete response.dataValues.password;
      res.status(200).json({
        message: "Creación exitosa",
        data: response,
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(400).json({
          message: "Ya existe un usuario con ese email",
          code: "11000",
        });
      }
      return res.status(500).json({ message: "Server error 🤖" });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) throw { code: 11001 };
      // compare
      const matchPassword = await bcrypt.compare(password, user.password_hash);
      if (!matchPassword) {
        return res.status(200).json({
          message: "Credenciales erróneas",
        });
      }
      // handle JWT 🤔
      const { token, expiresIn } = createToken(user.id);

      return res.status(200).json({
        message: "Usuario existe y con contraseña",
        user,
        token,
      });
    } catch (error) {
      if (error.code === 11001) {
        return res.status(403).json({
          message: "No existe un usuario con ese email",
          code: "11001",
        });
      }
    }
  },
};
