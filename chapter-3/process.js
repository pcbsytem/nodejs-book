const http = require("http");
const fs = require("fs");
const readAsync = require("./read-async");
const readSync = require("./read-sync");
const file = "./node.exe";
const stream = fs.createWriteStream(file);
const download = "http://nodejs.org//dist/latest/node.exe";
http.get(download, (res) => {
  console.log("Fazendo download do Node.js");
  res.on("data", (data) => {
    stream.write(data);
  });

  res.on("end", () => {
    stream.end();
    console.log("Download finalizado!");
    readAsync(file);
    readSync(file);
  });
});
