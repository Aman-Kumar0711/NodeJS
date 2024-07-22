const fs = require("fs");
const url = require("url");
const http = require("http");
const { readFileSync } = require("fs");
const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`, "UTF-8");
  const objData = JSON.parse(data);
  res.setHeader("Content-Type", "text/plain");
  //ensures that the browser correctly interprets the response as plain text.
  if (req.url == "/") {
    //iska matlab hai ki main home page per hoon
    res.end("Hello World! Welcome to Home");
  } else if (req.url == "/about") {
    //iska matlab hai ki main about page per hoon
    res.end("Hello World! Welcome to About");
  } else if (req.url == "/contact") {
    //iska matlab hai ki main contact page per hoon
    res.end("Hello World! Welcome to Contacts");
  } else if (req.url == "/userapi") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[1].name);
  } else {
    //content abhi bhi document type aa rha hoga per yeh document thode hi hai yeh to error hai...isko HTML mei denge
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Error 404.Page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port number 8000");
});
//yeh check karna ho ki koi API kaam kar rahi hai ki nahin to ek site hai POSTMAN naam se udhar jaake link paste kar do agar data aa jaaye to samajh lena ki kaam kar rahi hai otherwise nahin...
