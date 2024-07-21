const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mult = (a, b) => {
  return a * b;
};
const name = "Aman";
//module.exports=add;
//agar mujhe 2 ya uss se zyada cheezein export karni hai to?
//hum object format mei kar denge jisme ki individual fxn jo hum bana rahe hain and jinko export karna hai woh property ban jaayegi uss obj ki
// module.exports.add = add;
//jo cheez main export kar rha hoon uska naam same hona chahiye jo maine fxn banaya hai per module.export. ke baad main kuchh bhi naam de sakta hoon...it is like ki main add fxn ko export karna chah rha hoon add1 naam deke
// module.exports.sub = sub;
//ab aise har kisi ko alag se thode hi export karenge,seedhe object bana ke daal do
module.exports = { add, sub, mult, name };
