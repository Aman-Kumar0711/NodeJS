//To access web pages of any web application we need web server.This server will handle all http requests for the web application.
//for example APACHE is web server for PHP and Java Web applications
//Node.js allows you to create your own web server which can handle HTTP requests asynchronously.
//Node.js web appn can run on IIS or APACHE web server but it is recommended to use Node.js web server
//To create server we need to acquire http module
const http = require("http");
const server = http.createServer((req, res) => {
  //req is jo maine request kari and res is jo mujhe response mila
  //req jab tak nahin karoge tab tak response nahin milega...
  res.end("Hello World!");
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port number 8000");
}); //pehla hai port number dusra hai host...listen method se hum kya req kari woh dekhte hain
//127.0.0.1 is local host

//iss code ko run karne ke baad main browser per jaake localhost:8000/ search karunga to Hello World! likha milega
