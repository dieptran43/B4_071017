//Cach chuyen file router ra ngoai
var express = require("express");
var router = require("./router");
var chat = require("./chat.js");
//Cau hinh port chay o server process.env.PORT
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("./public")); //thu muc chua cac file css

app.use("/",router);
app.use("/chat",chat);
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("serverring http://localhost:3000")
})