const app = require("./src/app");
const PORT = process.env.PORT || 8085;
const initRouter = require("./api/routes");

initRouter(app);
app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}/`);
});
