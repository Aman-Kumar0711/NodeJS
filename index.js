const fs = require("fs"); //fs is a module in Node.js
//creating a new file
fs.writeFileSync("read.txt", "Hey Aman");
//agar read.txt naam ki file nahin hogi to woh create ho jaayegi and agar hogi to usme data override ho jaayega
fs.writeFileSync("read.txt", "Aman"); //ab file ka content Hey Aman se Aman ho gaya hoga

//mujhe isi file mei data add karna hai to?
fs.appendFileSync("read.txt", " Chahar welcome to Node playlist");

const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);
//Node.js includes an additional data type known as buffer which is not present in browser's JS
//Buffer is mainly used to store binary data, while reading from a file or recieving packets over the network
const original_data = buf_data.toString();
console.log(original_data);
//renaming the file
fs.renameSync("read.txt", "new.txt");
