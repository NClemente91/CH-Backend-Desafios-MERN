const persFS = require("../persistencia/fileSysytem/fileSystem");
const persMemoria = require("../persistencia/memory/memoria");
const persMongoDBDBaaS = require("../persistencia/mongoDBBaaS/mongoDBDBaaS");
const config = require("../configs/config");

let pers;

class persFactory {
  static set(opcion) {
    if (!pers) {
      console.log(`**** PERSISTENCIA SELECCIONADA **** ${opcion}`);
      switch (opcion) {
        case "MEM":
          pers = new persMemoria();
          // console.log(pers);
          return pers;
        case "FILE":
          pers = new persFS();
          // console.log(pers);
          return pers;
        case "MONGO":
          pers = new persMongoDBDBaaS();
          // console.log(pers);
          return pers;
      }
    } else {
      console.log(`**** PERSISTENCIA SELECCIONADA CON ANTERIORIDAD ****`);
      return pers;
    }
  }
}

module.exports = persFactory.set(config.PERSISTENCIA);
