const express = require("express") ;
const router = require("./routes/ai.routes");

const app = express();
 app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.use("/api/ai", router);
module.exports = app;