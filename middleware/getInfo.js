const db = require("../db.js");
module.exports = (req, res, next)=>{
    //res.send(`My name: ${req.myName}`);
    let users = [];
    res.render('info', {users: db});
}