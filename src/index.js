require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const initRouter = require("./routes");
const app = express();
const PORT = process.env.PORT || 8085;

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

// app.use("/", (req, res) => {
//   res.json({
//     message: "WELCOME 😃",
//   });
// });

app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}/`);
});
