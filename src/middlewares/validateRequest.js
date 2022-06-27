const { body, validationResult } = require("express-validator");

const validatorResponse = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

const validateBodyRegisterContent = [
  body("name", "Formato incorrecto, debe ser una cadena de texto")
    .trim()
    .isString(),
  body("lastName", "Formato incorrecto, debe ser una cadena de texto")
    .isString()
    .trim(),
  body("email", "Formato incorrecto, debe ser una cadena de texto")
    .trim()
    .isString()
    .isEmail()
    .normalizeEmail(),
  body("password", "Formato incorrecto, debe ser una cadena de texto")
    .trim()
    .isString(),
  body("password", "Mínimo 8 carácteres").trim().isLength({ min: 8 }),
  validatorResponse,
];

const validateLoginContent = [
  body("email", "Formato incorrecto, debe ser una cadena de texto")
    .trim()
    .isString()
    .isEmail()
    .normalizeEmail(),
  body("password", "Formato incorrecto, debe ser una cadena de texto")
    .trim()
    .isString(),
  body("password", "Mínimo 8 carácteres").trim().isLength({ min: 8 }),
  validatorResponse,
];

module.exports = {
  validatorResponse,
  validateBodyRegisterContent,
  validateLoginContent,
};
