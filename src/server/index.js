require("dotenv").config();

const path = require("path");
const express = require("express");
const axios = require("axios");

// Default PORT
const port = process.env.PORT || 3000;

// Create App instance
const app = express();
app.use(express.json());
app.use(require("cors")());

// Point to static dir
app.use(express.static("dist"));

// Serve static assets
app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

// Evaluation
app.post("/evaluate", (req, res) => {
  const { url } = req.body;

  if (!url)
    return res.status(400).send({ error: 400, message: "URL is missing" });

  axios
    .get("https://api.meaningcloud.com/sentiment-2.1", {
      params: {
        key: process.env.API_KEY,
        lang: "en",
        url,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}!`);
});
