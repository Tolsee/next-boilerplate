// server.js
const next = require("next");
const path = require("path");
const { parse } = require("url");
const cookiesMiddleware = require("universal-cookie-express");
const compression = require("compression");

const routes = require("../routes");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

// With express
const express = require("express");

app.prepare().then(() => {
  express()
    .use((req, res, goToNext) => {
      const parsedUrl = parse(req.url, true);
      const rootStaticFiles = ["/robots.txt", "/sitemap.xml", "/favicon.ico"];

      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const staticPath = path.join(
          __dirname,
          "..",
          "static",
          parsedUrl.pathname
        );
        app.serveStatic(req, res, staticPath);
      } else {
        goToNext();
      }
    })
    .use(cookiesMiddleware())
    .use(compression())
    .use(handler)
    .listen(3000);
});
