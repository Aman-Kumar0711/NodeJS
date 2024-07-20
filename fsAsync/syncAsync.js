//synchronous mei jab tak meri ek req complete nahin ho jaayegi tab tak aage ka kaam nahin hoga
//per async mei aisa nahin hota wahaan per jab tak ek request ka response aa rha hota hai tab tak dusri req per kaam kar sakte hain hence we should prefer asynchronous JS
const fs = require("fs");
// const data = fs.readFileSync("read.txt", "UTF-8");
// console.log(data);
fs.readFile("read.txt", "UTF-8", (err, res) => {
  console.log(res);
});
console.log("after data");
//jo bhi req kam time legi woh pehle execute ho jaayegi
