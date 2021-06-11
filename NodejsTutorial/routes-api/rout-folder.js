//get all users by api
const users = require('../users');

//set field with rout
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.htm'));
})

//set static folder , create rout
app.use(express.static(path.join(__dirname, 'public')))
