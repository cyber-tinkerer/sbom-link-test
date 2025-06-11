const express = require("express");
const axios = require("axios");
const _ = require("lodash");
const moment = require("moment");
const minimist = require("minimist");

const app = express();

app.get("/", (req, res) => {
  const args = minimist(process.argv.slice(2));
  const data = { 
    message: "Hello SBOM-Link!", 
    time: moment().format(),
    env: process.env.NODE_ENV || 'development'
  };
  res.json(_.merge(data, { users: [], config: args }));
});

app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});