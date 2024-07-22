//humne apna server to bana liya ab maan ke dekho ki kisi ne url per jaake localhost:8000/ ko localhost:8000/about kar diya matlab ki mujhe ab about waale page per aa jaana hai to yeh kaise karunga?
//isko bolte hain routing and here we are dealing with URL
const url = require("url");
const http = require("http");
const server = http.createServer((req, res) => {
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
  }
  //   } else {
  //     res.writeHead(404);
  //     res.end("Error 404");
  //     //agar main page pe jaake inspect karunga to network mei mujhe iska status code dikhayega 200 which means successful response...but yeh to error hai hence mujhe iska status code change karna hoga...uske liye we use writeHead method
  //   } //inke alaawa kuchh aur search kare to error aa jaaye kyun ki mere paas itne hi page hain bas iske alaawa kuchh bhi search karna should throw an error.
  else {
    //content abhi bhi document type aa rha hoga per yeh document thode hi hai yeh to error hai...isko HTML mei denge
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Error 404.Page not found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port number 8000");
});

// res.end() is a method in the http module of Node.js that is used to end the response process. It can optionally take a string or buffer as an argument, which will be sent as the final data chunk to the client. This method signifies that the server has finished sending data to the client for this particular request, and the connection can be closed.

// HTTP response status codes

// HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

//     Informational responses (100–199)
//     Successful responses (200–299)
//     Redirection messages (300–399)
//     Client error responses (400–499)
//     Server error responses (500–599)
