const router = require("express").Router();
const writtingServices = require("../../services/writtings.services");

router.get("/", writtingServices.getWrittings);

module.exports = router;
