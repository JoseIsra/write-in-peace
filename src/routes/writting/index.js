const router = require("express").Router();
const writtingServices = require("../../services/writtings.services");
const { authenticateRoute } = require("../../middlewares/authenticate");

router.get("/published", authenticateRoute, writtingServices.getWrittings);
router.post("/newone", authenticateRoute, writtingServices.createNewWritting);
router.post(
  "/emotional-session",
  authenticateRoute,
  writtingServices.createNewEmotionalSession
);

module.exports = router;
