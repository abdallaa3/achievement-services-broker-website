const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4174);
const basePath = "/achievement-services-broker-website";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

function safePath(urlPath) {
  let cleanPath = decodeURIComponent(urlPath.split("?")[0]);

  if (cleanPath === "/") {
    cleanPath = `${basePath}/ar/`;
  }

  if (cleanPath === basePath) {
    cleanPath = `${basePath}/`;
  }

  if (cleanPath.startsWith(`${basePath}/`)) {
    cleanPath = cleanPath.slice(basePath.length);
  }

  if (cleanPath.endsWith("/")) {
    cleanPath += "index.html";
  }

  const resolved = path.resolve(root, `.${cleanPath}`);
  return resolved.startsWith(root) ? resolved : null;
}

const server = http.createServer((req, res) => {
  const filePath = safePath(req.url || "/");

  if (!filePath) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.stat(filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      send(res, 404, "Not found");
      return;
    }

    const contentType = types[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-store"
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Local site: http://localhost:${port}${basePath}/ar/`);
  console.log(`Network:    http://YOUR-IP:${port}${basePath}/ar/`);
});
