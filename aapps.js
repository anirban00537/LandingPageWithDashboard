import express from "express";

const path = require("path");

const app = express();

const PORT = process.env.PORT || 200;

app.listen(PORT, () => {
  console.log("Server running successfully on localhost:" + PORT);
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/build")));
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/build", "index.html"));
});
