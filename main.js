const express = require("express");
const fs = require("fs");
const path = require("path");

const Port = 3008;
const app = express();

const handleOfficeHrs = (req, res, next) => {
  const date = new Date();
  const currentHour = date.getHours();

  if (currentHour >= 9 && currentHour < 17) {
    next();
    return;
  }

  const data = fs.readFileSync("views/out.html");
  const html = data.toString();

  res.status(301).set("Content-Type", "text/html").send(html);
};

app.use(handleOfficeHrs);

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
