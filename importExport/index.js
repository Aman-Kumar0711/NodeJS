//In this we'll see how to create and export our own modules
//har individual file ko hum ek module kehte hain
//main ek function banaaunga idhar addition ka and usko opr.js se import karke call karunga
// const oper = require("./opr.js");
//jo bhi opr.js export karega wahi yeh require kar rha hai..yeh ek object hai iske andar jo bhi properties hongi hum unko access kar sakte hain
// console.log(oper.add(5, 3));
// console.log(oper.sub(5, 3));

//agar mujhe baar baar yeh nahin likhna hai . kar kar ke to:
const { add, sub, mult, name } = require("./opr.js");
console.log(add(5, 3));
console.log(sub(5, 3));
console.log(mult(5, 3));
console.log(name);
