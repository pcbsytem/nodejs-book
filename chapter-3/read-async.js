const fs = require("fs");
const readAsync = (file) => {
  console.log("Fazendo leitura assincrona");
  const begin = new Date().getTime();
  fs.readFile(file, (err, data) => data);
  const end = new Date().getTime();

  console.log(`Bloqueio assincrono: ${end - begin}ms`);
};

module.exports = readAsync;
