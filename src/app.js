require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const initRouter = require("./routes");
const whitelist = ["http://localhost:8081"];
// server config 😀
app.use(
  cors({
    origin: function (origin, callback) {
      console.log("origin request", origin);
      if (!origin || whitelist.includes(origin)) {
        return callback(null, origin);
      }
      return callback("Cors locked 🤖");
    },
  })
  // credentials: true,
);
app.use(express.json());
app.use(cookieParser());
app.set("strict routing", true);
initRouter(app);

module.exports = app;
