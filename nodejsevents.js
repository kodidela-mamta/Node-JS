const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("WaterFull", () => {
  console.log("Please turn off the motor!");
  setTimeout(() => {
    console.log("Please turn off the motor, Gentle remainder");
  }, 3000);
});
myEmitter.emit("WaterFull");
