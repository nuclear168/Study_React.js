const express = require('express');
const router = express.Router();
const users = require('../Users');
const uuid = require('uuid');

//Get all users , create api
router.get('/',(req,res) => res.json(users));

//Get single users , create api 
router.get('/:id', (req, res) => {
    let found = users.some(user => user.id == req.params.id);
    if (found) {
        res.json(users.filter(user => user.id == req.params.id));
    } else {
        res.status(400).json({ msg: `No users with the id of ${req.params.id}`});
    }
})

//create users 
router.post('/', (req, res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        mail: req.body.mail
    }
    if (!newUser.name || !newUser.mail) {
        return res.status(400).json({ msg: 'Please include a name and mail'});
    }

    users.push(newUser)
    // res.json(users);
    res.redirect('/');
})

//update users
router.put('/:id', (req, res) => {
    let found = users.some(user => user.id == req.params.id);

    if(found) {
        const updUsers = req.body;
        users.forEach(user => {
            if (user.id == req.params.id) {
                user.name = updUsers.name ? updUsers.name : user.name;
                user.mail = updUsers.mail ? updUsers.mail : user.mail;

                res.json({ msg: 'User update', user });
            }
        })
    } else {
        res.status(400).json({ msg: `No user with the id of ${req.params.id}` })
    }
})

//delete user
router.delete('/:id', (req, res) => {
    let found = users.some(user => user.id == req.params.id);

    if (found) {
        res.json ({
            msg: 'Member deleted',
            users: users.filter(user => user.id !== parseInt(req.params.id))
        })
    } else {
        res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
    }
})

module.exports = router;