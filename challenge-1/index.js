const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response) => {
  const { pathname } = url.parse(request.url, true);
  const exists = fs.existsSync(`${__dirname}${pathname}.html`);
  let page = "";

  if (exists) {
    page = pathname;
  } else {
    page = pathname === "/" ? "/artigos" : "/erro";
  }

  fs.readFile(__dirname + `${page}.html`, (erro, html) => {
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.end(html);
  });
});

server.listen(5000, () => {
  console.log("Executando Site Pessoal");
});
