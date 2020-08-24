const fs = require("fs");
const readSync = (file) => {
  console.log("Fazendo leitura assincrona");
  const begin = new Date().getTime();
  fs.readFileSync(file);
  const end = new Date().getTime();

  console.log(`Bloqueio sincrono: ${end - begin}ms`);
};

module.exports = readSync;
