// # Events Module

//   * Node.js has a builtin module called Events,
//   * Where you can create- , fire-, and listen for- your own events.

// Example : 1. Registering for the event to be fired only one time using once.

// Example : 2. Create an event emitter instance and register a couple of callbacks

// Example : 3. Register for the event with callback parameters

const EventEmitter = require("events");

const event = new EventEmitter();

// event.on('sayMyName', () => {
//     console.log('your name is chakri');
// });

// event.emit("sayMyName");

// multiple events

/*

event.on('sayYourName', () => {
    console.log('your name is bahadur');
});

event.on('sayYourName', () => {
    console.log('your name is thapa');
});

event.on('sayYourName', () => {
    console.log('your name is vinod');
});

event.emit("sayYourName");

*/

event.on("checkPage", (sc, msg) => {
    console.log(`Status code is ${sc} and The page is ${msg}`);
});


event.emit("checkPage", 200, "ok");