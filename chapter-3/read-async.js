const fs = require("fs");
const readAsync = (file) => {
  console.log("fazendo leitura assíncrona");
  const begin = new Date().getTime();
  fs.readFile(file);
  const end = new Date().getTime();

  console.log(`Bloqueio assíncrono: ${end - begin}ms`);
};

module.exports = readAsync;
