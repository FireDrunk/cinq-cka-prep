const express = require('express')
const app = express()
const port = 3000
const readiness_delay = parseInt(process.env.READINESS_DELAY || 0);
var liveness_delay = parseInt(process.env.LIVENESS_DELAY || 0);

console.log("Starting");
console.log(`READINESS_DELAY: ${readiness_delay}`);
console.log(`LIVENESS_DELAY: ${liveness_delay}`)

// Set Response Delay
app.use((req, res, next) => setTimeout(next, liveness_delay * 1000));

// Functions
console.log("Defining Functions...");
app.get('/', (req, res) => {
    console.log('Regular Request Received.');
    res.send("Hello!");
});

app.get('/live', (req, res) => {
    console.log("Live Request Received.");
    res.send('OK!');
});

app.get('/ready', (req, res) => {
    console.log('Readiness Request Received.');
    res.send('OK!')
});

app.get('/increase', (req, res) => {
    console.log('Increase Request Received.');
    liveness_delay++;
    res.send(`Done, LIVENESS_DELAY is now: ${liveness_delay}`);
});

// Startup
console.log(`Delaying startup for readyiness: ${readiness_delay}`);
setTimeout(start, readiness_delay * 1000);

function start() {
    app.listen(port,"0.0.0.0", () => {
        console.log(`Started listening on port ${port}!`)
    })
}