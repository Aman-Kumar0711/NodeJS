//JSON stands for JavaScript Object Notation...yeh ek file format hai jisme JS ka jo object hota hai uss format mei store hoti hain cheezein(key,value pair) bas fark yeh hai ki dono taraf string hoti hai(ofc jahaan number hai woh to number hi rahega)
//Bahut hi kam size ki hoti hai JSON file hence transportation ke liye easy hai
//JSON is often used when data is sent from server to a web page
const fs = require("fs");
const mySelf = {
  name: "Aman",
  age: 22,
  college: "IET Lucknow",
};
//const jsonData = JSON.stringify(mySelf);
//JSON.stringfy() se object ko JSON mei convert karte hain
//console.log(jsonData);
//mySelf object mei main name nikaal sakta hoon mySelf.name karke per yeh kaam jsonData.name se nahin hoga...iska alag tareeka hai

//JSON.parse() se object mei convert karte hain JSON data ko
// const objData = JSON.parse(jsonData);
// console.log(objData);

//Tasks:
// 1. Convert Object into JSON
// 2. Add it to another File
// 3. read File
// 4. Convert json back into original obj...
// 5. console.log()

const jsonData = JSON.stringify(mySelf);
//Asynchronously banayenge file
// fs.writeFile("read.json", jsonData, () => {
//   console.log("done");
// });
fs.readFile("read.json", "UTF-8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log(data); //yeh json data dega
  console.log(orgData); //yeh object dega
});
