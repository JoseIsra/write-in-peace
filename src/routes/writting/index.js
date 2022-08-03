const router = require("express").Router();
const writtingServices = require("../../../src/services/writtings.services");

router.get("/", writtingServices.getWrittings);

module.exports = router;
