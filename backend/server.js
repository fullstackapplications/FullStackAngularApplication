const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //middle ware to read body sent
const jwt = require('jsonwebtoken');

const port = 63145;

messages = [
    {text: 'some text', owner: 'Tim'},
    {text: 'other text', owner: 'Jane'}
];

users = [];

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const api = express.Router();
const auth = express.Router();






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

api.get('/messages/:user', (request, response) => {
    const user = request.params.user;
    console.log('User we are filtering by: ', user);
    const results = messages.filter( message => {
       return message.owner == user;
    });
    // response.json(messages);    //displayed on the page
    response.json(results);    //displayed on the page
    console.log("Messages was filtered and accessed!", results);
});

api.post('/messages', (request, response) => {
    console.log(request.body);
    messages.push(request.body);
    response.json(request.body);
    // response.sendStatus(200);       //sent to client
});


auth.post('/register', (request, response) => {
    const index = users.push(request.body) - 1;
    const user = users[index];
    user.id = index;
    // const token = jwt.sign(user.id, '123');
    const token = {'token': jwt.sign(user.id, '123')};      // course suddenly decides to change response
    console.log(request.body);
    // console.log('Register Accessed!', response.body);

    response.json(token);
});

app.use('/api', api);
app.use('/auth', auth);

app.listen( port , () => {
    console.log(`Listening on port ${port}!`);
});
