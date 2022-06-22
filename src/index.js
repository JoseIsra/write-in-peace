const express = require("express");

const app = express();

const PORT = 8081;
app.use(express.json());

app.use("/", (req, res) => {
  res.json({
    message: "WELCOME 😃",
  });
});

app.listen(PORT, () => {
  console.log("server on http://localhost:8081/");
});
