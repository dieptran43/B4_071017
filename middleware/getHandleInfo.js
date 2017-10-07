const db = require("../db.js");
module.exports = (req, res)=>{
    //res.send(`My name: ${req.myName}`);
    //let users = [];
    let {name} = req.query;
    //res.send(`This handle Info ${name}` );
    db.push(name);
    //res.render("info", {users})
    res.redirect("/info")
}