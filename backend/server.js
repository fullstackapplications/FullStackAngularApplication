const express = require('express');

const app = express();

const port = 1234;

messages = [
    {text: 'some text', owner: 'Tim'},
    {text: 'other text', owner: 'Jane'},
]

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/messages', (request, response) => {
    response.json(messages);    //displayed on the page
    console.log("Someone connected to messages page!");
})

app.listen( port , () => {
    console.log(`Listening on port ${port}!`);
})
