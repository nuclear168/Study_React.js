const express = require('express');

const app = express();

//set field with rout
const path = require('path');

//middleware
const logger = require('./middleware/logger');
const router = require('./routes-api/users');

const exhdb =require('express-handlebars');

//นำข้อมูล users ไปโชวฺหน้า index.handlebars
const users = require('./Users')

// render template
//handlebars middleware
app.engine('handlebars', exhdb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//home page rout
app.get('/', (req, res) => {
    res.render('index', {
        title: 'User App',
        users
    });
})

//create middleware log('Successfully!')
// const logger = (req, res, next) => {
//     console.log('Successfully!');
//     next();
// }

//Init Middleware
// app.use(logger);

//Body parse middleware Use for create users
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Get single users
app.use('/api/users', require('./routes-api/users')); 

//set static folder , create rout
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is runing on port ${PORT}`));