const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //middle ware to read body sent
const jwt = require('jsonwebtoken');

const port = 63145;

messages = [
    {text: 'some text', owner: 'Tim'},
    {text: 'other text', owner: 'Jane'}
];

users = [{firstName: "Test", email: "test@test.com", password: 'test', id: 0}];

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next();
});

const api = express.Router();
const auth = express.Router();

app.use('/api', api);
app.use('/auth', auth);




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


api.get('/users/me', checkAuthenticated, (req, res) => {

    console.log('User Id: ', req.user);
    res.json(users[req.user]);
});

api.post('/users/me', checkAuthenticated, (req, res) => {

    const user = users[req.user];

    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;

    res.json(user);
});

auth.post('/register', (request, response) => {
    const index = users.push(request.body) - 1;
    const user = users[index];
    user.id = index;
    // const token = jwt.sign(user.id, '123');
    // // const token = {'token': jwt.sign(user.id, '123')};      // course suddenly decides to change response
    // console.log(request.body);
    // // console.log('Register Accessed!', response.body);
    //
    // response.json({
    //     firstName: user.firstName,
    //     token,
    // });

    sendToken(user, response);
});

auth.post('/login', (request, response) => {
    let user = users.find(  user => {
        return user.email === request.body.email;
    });

    if(!user) {
        // console.log('This is the user info we received: ', user);
        sendAuthError(response);
    }

    if(user.password == request.body.password) {
        sendToken(user, response);
    }
    else {
        sendAuthError(response);
    }
});

function sendToken(user, response) {

    const token = jwt.sign(user.id, '123');
    // const token = {'token': jwt.sign(user.id, '123')};      // course suddenly decides to change response
    // console.log(request.body);
    // console.log('Register Accessed!', response.body);

    response.json({
        firstName: user.firstName,
        token,
    });

}

function sendAuthError(response) {
    return response.json({
        success: false,
        message: 'email or password incorrect!'
    })
}

function checkAuthenticated( req, res, next) {
    if(!req.header('Authorization')) {
        console.log("Missing header?");
        return res.status(401).send({message: '************ Error Missing authentication Header !'});
    }

    let token = req.header('authorization').split(' ')[1];

    let payload = jwt.decode(token, '123');

    if(!payload) {
        console.log("Missing request?");
        return res.status(401).send({message: '!!!!!!!!!!!! Error Missing request !'});
    }

    req.user = payload;

    next();
}

app.listen( port , () => {
    console.log(`Listening on port ${port}!`);
});
