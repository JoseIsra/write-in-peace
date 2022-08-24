const { Writting } = require("../models");

module.exports = {
  getWrittings: (req, res) => {
    // const data = await Writting.findAll()
    res.json({
      message: "writtings",
    });
  },
  createNewWritting: async (req, res) => {
    try {
      const data = await Writting.create(req.body);
      if (!data) {
        res.json({
          message: "NO-WRITTING-CREATED",
        });
        return;
      }
      res.status(200).json({
        message: "WRITTING-CREATED",
        data,
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        message: error.message,
      });
    }
  },
  createNewEmotionalSession: async (req, res) => {
    // simply add new writting
    try {
      const data = await Writting.create(req.body);
      if (!data) {
        res.json({
          message: "NO-EMOTIONAL-DIARY",
        });
        return;
      }
      res.status(200).json({
        message: "DIARY-CREATED",
      });
    } catch (error) {
      console.log(error);
      res.status(401).json({
        message: error.message,
      });
    }
  },
};
