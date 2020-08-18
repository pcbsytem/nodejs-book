const fs = require("fs");
const readSync = (file) => {
  console.log("fazendo leitura assíncrona");
  const begin = new Date().getTime();
  fs.readFileSync(file);
  const end = new Date().getTime();

  console.log(`Bloqueio síncrono: ${end - begin}ms`);
};

module.exports = readSync;
