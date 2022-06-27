const router = require("express").Router({ strict: true });
const userRouter = require("./users");
const writtingRouter = require("./writting");

const initRouter = (app) => {
  app.use("/api/v1", router);
  router.use("/user", userRouter);
  router.use("/writting", writtingRouter);
};

module.exports = initRouter;
