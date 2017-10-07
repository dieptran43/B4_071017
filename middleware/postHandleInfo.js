const db = require("../db.js");
module.exports = (req, res)=>{
    
    let {name} = req.body;
    db.push(name);
    console.log("Da vao post......");
    res.redirect("/info")
}