var express = require("express");
var app = express();
app.use(
    (req, res, next) =>{
        next();
    }
);


app.route("/")
.get((req, res, next)=>{
    res.send("Get methods");
})
.post((req, res, next)=>{
    res.send("Post methods");
});


//Cau hinh port chay o server process.env.PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("serverring http://localhost:3000")
})