//isme ek aur module ki baat karenge jiska naam hai os...
//iski madad se humko jo hum os use kar rahe hain uske baare mei pta chalega
const os = require("os");
console.log(os.arch());
//how to check mere system mei kitni free memory hai?
const freeMem = os.freemem();
console.log(`${freeMem / 1024 / 1024 / 1024}`);
//kyun ki by default mere paas bytes mei aayega answer but I need it in GB
