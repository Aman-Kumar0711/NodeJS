//jo bhi code main likhta hoon kisi module ke andar woh baahar kyun access nahin ho jaata bina export kiye?
//kyun ki behind the scenes JS usko wrap up kar deti hai with the help of () jiss se uska scope limited ho jaata hai and global scope ko pollute nahin karta woh
//basically IIFE ban jaata hai and uske andar ka data protected rehta hai
// const name="Aman";
// console.log(name);
//maine jo yeh likh diya hai woh behind the scenes aisa dikhta hai
(function (exports, require, module, __filename, __dirname) {
  //yeh iske default parameters hote hain
  const name = "Aman";
  console.log(name);
})();
//this is known as module wrapping
// how to create an IIFE?
//create a anonymous fxn inside () and run karna ho to end mei () laga do
