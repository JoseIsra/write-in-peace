const jwt = require("jsonwebtoken");

/**
 * @params {payload} Argument to sign and create the new token
 * @return {token,expiresIn} Object with attributes: token and expiresIn
 */
const createToken = (payload) => {
  try {
    const expiresIn = 60 * 15;
    const token = jwt.sign({ key: payload }, process.env.JWT_SECRET, {
      expiresIn,
    });
    return { token, expiresIn };
  } catch (error) {
    console.error(error);
  }
};

const createTokenRefresher = (payload, res) => {
  console.log("FUNCIONA EL REFRESHER?", payload);
  try {
    const expiresIn = 60 * 60 * 24 * 30;
    const refreshToken = jwt.sign({ key: payload }, process.env.JWT_REFRESH, {
      expiresIn,
    });
    res.cookie("refresherToken", refreshToken, {
      httpOnly: false,
      secure: !(process.env.MODE === "developer"),
      sameSite: "none",
      // secure: false,
      expires: new Date(Date.now() + expiresIn * 1000),
    });
  } catch (error) {
    console.error(error);
  }
};

const jsonWebTokenErrors = {
  "invalid token": "Token inválido",
  "jwt malformed": "Token incompleto,faltan componentes",
  "jwt signature is required": "Firma de token requerida",
  "invalid signature": "Firma de token inválida",
  "jwt expired": "Token expirado",
  "No Bearer": "NOTOKEN-No existe token",
};

module.exports = { createToken, jsonWebTokenErrors, createTokenRefresher };
