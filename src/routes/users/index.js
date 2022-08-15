const router = require("express").Router();
const userServices = require("../../services/users.services");
const {
  validateBodyRegisterContent,
  validateLoginContent,
} = require("../../middlewares/validateRequest");

const {
  authenticateRoute,
  authenticateRefreshToken,
} = require("../../middlewares/authenticate");

router.get("/users", authenticateRoute, userServices.getUsers);
router.get("/userme", authenticateRoute, userServices.getUser);
router.post("/signin", validateBodyRegisterContent, userServices.signInUser);
router.post("/login", validateLoginContent, userServices.login);
router.get("/refresh", authenticateRefreshToken, userServices.refresh);
router.get("/logout", userServices.logout);

module.exports = router;
