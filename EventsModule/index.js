//ek aur built-in module ki baat karne jaa rahe hain jiska naam hai "events" module...
//With the help of this you can create,fire and listen for your events
//to require this we create a class uski madad se bante hain object
const EventEmitter = require("events");
const event = new EventEmitter();
//event ek object bana liya hai ab yeh events module ki saari cheezon ko access kar sakta hai
event.on("sayMyName", () => {
  console.log("My name is Aman");
});
//hum ek event ke through multiple function ko call kar sakte hain
event.on("sayMyName", () => {
  console.log("My name is Alpha");
});
event.on("sayMyName", () => {
  console.log("My name is Beta");
});
event.on("sayMyName", () => {
  console.log("My name is Gamma");
});
event.on("sayMyName", () => {
  console.log("My name is Delta");
});
//event create karenge:
event.emit("sayMyName");
//kya karta hai yeh event yeh upar define karenge
//emitter objects emit named events that cause previously registered listeners to be called...isliye emit aakhiri mei karate hain aur listeners ko upar likhte hain
//defining a event with callback parameters
event.on("checkPage", (sc, msg) => {
  console.log(`The status code of page is ${sc} and status is ${msg}`);
});

//registering for the events with callback parameters
event.emit("checkPage", 200, "ok");
