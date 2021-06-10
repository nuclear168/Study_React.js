const express = require('express');

const path = require('path');
const { nextTick } = require('process');

const users = require('./users')

const app = express();

const logger = (req, res, next) => {
    console.log('Hello!');
    next();
}

//Init Middleware
app.use(logger);

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.htm'));
// })

//set static folder
// app.use(express.static(path.join(__dirname, 'public')))


//Get all users
app.get('/api/users',(req,res) => res.json(users));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is runing on port ${PORT}`));

