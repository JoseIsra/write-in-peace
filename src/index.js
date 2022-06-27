require("dotenv").config();
const express = require("express");
const cors = require("cors");
const initRouter = require("./routes");
const app = express();
const PORT = process.env.PORT || 8081;

// server config 😀
app.use(express.json());
app.use(cors());
app.set("strict routing", true);
initRouter(app);

app.use("/", (req, res) => {
  res.json({
    message: "WELCOME 😃",
  });
});

app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}/`);
});
