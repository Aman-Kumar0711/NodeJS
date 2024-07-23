//Streams are objects that let you read data from a source or write data to a destination in continous fashion.
//Streaming means listening to music or watching videos in real time instead of downloading them and watch later.
//In node.js there are 4 types of stream:
//Readable:- stream which is used for read operation
//Writable:- stream which is used for write operation
//duplex:- stream which is used for both read and write operation
//transform:- A type fo duplex stream where output is computed based on input

//Each type of stream is an EventEmitter instance and throws several events at different instances of time.
//Some of the commonly used events are:
//data:- this event is fired when data is available to read
//end:- this event is fired when there is no more data to read
//error:- this event is fired when there is any error while recieving or writing data
//finish:- this event is fired when all the data has been flushed to underlying system

//maine ek file banaayi hai input.txt mujhe usko read karna hai per stream karke...to iske liye mujhe ek server banana padega and I am dealing with a file in my system hence fs module bhi require karna padega
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  //   fs.readFile("input.txt", (err, data) => {
  //     if (err) return console.error(err);
  //     res.end(data.toString());
  //   });
  //yeh to basic tareeka hai yeh streaming thode hi hui, stream karne ka ab dekhenge
  //const rStream = fs.createReadStream("input.txt");
  //   rStream.on("data", (chunkData) => {
  //     //basically jaise jaise data milta jaaye to data event ko call hota rahe and hence data show hota jaye mujhe
  //     res.write(chunkData);
  //   });
  //   rStream.on("end", () => {
  //     res.end();
  //   });
  //   rStream.on("error", (err) => {
  //     console.log(err);
  //     res.end("File not found");
  //   });

  //ek aur tareeka hai jiss se ek hi line mei sab ho jaayega woh hai .pipe() method
  //It is a method used to take a readable stream and connect it to a writable stream
  //input.txt meri read file hai and index.js meri write file hai
  const rStream = fs.createReadStream("input.txt");
  rStream.on("error", (err) => {
    console.error(err);
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>File Not Found</h1>");
  });
  rStream.pipe(res);
  //bas ho gaya kaam
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening on port 8000");
});
