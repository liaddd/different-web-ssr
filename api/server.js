const express = require("express");
const next = require("next");
const path = require("path");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // server.get("/robots.txt", (req, res) => {
  //   return res.sendFile(path.join(__dirname, "/../robots.txt"));
  // });
  // server.get("/blog/post/:title", (req, res) => {
  //   return app.render(req, res, "/blog/post", { title: req.params.title });
  // });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
