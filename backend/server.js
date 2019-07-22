const express = require('express');
const bodyParser = require('body-parser'); //middle ware to read body sent
const app = express();

const port = 63145;

messages = [
    {text: 'some text', owner: 'Tim'},
    {text: 'other text', owner: 'Jane'}
];

app.use(bodyParser.json()); // lets express know what we receive in our body should be in json

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const api = express.Router();

// app.get('/messages', (request, response) => {
// //     response.json(messages);    //displayed on the page
// //     console.log("Someone connected to messages page!");
// // })
// //
// // app.post('/message', (request, response) => {
// //     console.log(request.body);
// //     messages.push(request.body);
// //     response.sendStatus(200);       //sent to client
// // })

api.get('/messages', (request, response) => {
    response.json(messages);    //displayed on the page
    console.log("Messages was accessed!");
})

api.post('/messages', (request, response) => {
    console.log(request.body);
    messages.push(request.body);
    response.json(request.body);
    // response.sendStatus(200);       //sent to client
})

app.use('/api', api);

app.listen( port , () => {
    console.log(`Listening on port ${port}!`);
})
