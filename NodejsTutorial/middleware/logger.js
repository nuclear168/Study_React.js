
//add function moment is add date and add time
const moment = require('moment');

//create middleware log req is url 
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

module.exports = logger;