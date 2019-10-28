const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get("/personal-info/:id", (req, res) => {
    return app.render(req, res, "/personal-info");
  });
  server.get("/services/:id", (req, res) => {
    return app.render(req, res, "/services");
  });
  server.get("/robots.txt", (req, res) => {
    return res.sendFile(path.join(__dirname, "/robots.txt"));
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
