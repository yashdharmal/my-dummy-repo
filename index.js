const express = require("express");
const config = require("./config");

const app = express();
const PORT = process.env.PORT || 3000;

const statusPayload = {
  status: "ok",
  message: "Dummy API is running",
  configLoaded: !!config.githubToken && !!config.awsKey
};

app.get("/", (req, res) => res.json(statusPayload));
app.get("/api/status", (req, res) => res.json(statusPayload));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
