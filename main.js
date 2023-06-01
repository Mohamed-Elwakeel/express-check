const express = require("express");
const fs = require("fs");
const path = require("path");

const Port = 3007;
const app = express();

app.get("/", (req, res) => {
  const htmlPath = path.join(__dirname, "views", "home.html");
  const data = fs.readFileSync(htmlPath);
  const html = data.toString();

  res.status(200).set("Content-Type", "text/html").send(html);
});

app.get("/contact", (req, res) => {
  const htmlPath = path.join(__dirname, "views", "contact.html");
  res.sendFile(htmlPath);
});

app.get("/services", (req, res) => {
  const htmlPath = path.join(__dirname, "views", "services.html");
  res.sendFile(htmlPath);
});

app.listen(Port);
