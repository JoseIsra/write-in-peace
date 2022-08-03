const router = require("express").Router();
const userServices = require("../../../src/services/users.services");
const {
  validateBodyRegisterContent,
  validateLoginContent,
} = require("../../../src/middlewares/validateRequest");

const {
  authenticateRoute,
  authenticateRefreshToken,
} = require("../../../src/middlewares/authenticate");

router.get("/users", authenticateRoute, userServices.getUsers);
router.post("/signin", validateBodyRegisterContent, userServices.signInUser);
router.post("/login", validateLoginContent, userServices.login);
router.get("/refresh", authenticateRefreshToken, userServices.refresh);
router.get("/logout", userServices.logout);

module.exports = router;
