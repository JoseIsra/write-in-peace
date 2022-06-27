const router = require("express").Router();
const userServices = require("../../services/users.services");
const {
  validateBodyRegisterContent,
  validateLoginContent,
} = require("../../middlewares/validateRequest");

const { authenticateRoute } = require("../../middlewares/authenticate");

router.get("/users", authenticateRoute, userServices.getUsers);
router.post("/signin", validateBodyRegisterContent, userServices.signInUser);
router.post("/login", validateLoginContent, userServices.login);

module.exports = router;
