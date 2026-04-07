// Import events module
const EventEmitter = require('events');

// Create an event emitter object
const eventEmitter = new EventEmitter();

//  Register event listener (Listener 1)
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome.`);
});

//  Register another listener for same event (Listener 2)
eventEmitter.on('greet', (name) => {
    console.log(`How are you, ${name}?`);
});

// Register another custom event
eventEmitter.on('status', (status) => {
    console.log(`System Status: ${status}`);
});

//  Trigger events using emit()

// Simulating asynchronous behavior
setTimeout(() => {
    console.log("\nTriggering 'greet' event...");
    eventEmitter.emit('greet', 'Sravya');  // passing data
}, 1000);

setTimeout(() => {
    console.log("\nTriggering 'status' event...");
    eventEmitter.emit('status', 'Active'); // passing data
}, 2000);