// var express = require("express");
// var app = express();
// var router = require("./router");

// var middleModule = require("./middleWare"); //nhung tu file middleWare.js
// //var {getMyName} = require("./middleWare").getMyName; //Cu fap destructing trong ES6
// //const {getMyName: getName, log } =require("./middleWare"); //gan bien getName = getMyName trong MiddleWare
// //console.log(middleModule);
// const bodyParser = require("body-parser");
// //Cau hinh local
// let urlEncoded = bodyParser.urlencoded({extended: false});
// let json = bodyParser.json();

// //Cau hinh global
// // app.use(bodyParser.urlencoded({extended: false}));
// // app.use(bodyParser.json());

// app.use(
//     (req, res, next) =>{
//         req.myName = "Diep Van";
//         next();
//     }
// );

// // //Dinh nghia global
// // app.use(middleModule.getMyName); //se gan gia tri cho thang cuoi cung
// // app.use(middleModule.log);

// app.use(router);

// // app.route("/")
// // .get(middleModule.getMyName, require("./middleware/getDefault"))
// // // .get((req, res, next)=>{
// // //     res.send(`Get methods ${req.myName} - ${middleModule.log}`);
// // // })
// // // .get(getMyName, (req, res, next)=>{  //Dinh nghia middleware local
// // //     res.send(`Get methods ${req.myName}`);
// // // })
// // .post(urlEncoded, json, require("./middleware/postDefault"));
// // // .post(urlEncoded, json, (req, res, next)=>{
// // //     res.send(`Post methods ${req.myName}`);
// // //     console.log(req.body);
// // // });


// //Cau hinh port chay o server process.env.PORT
// const port = process.env.PORT || 3000;
// app.listen(port, ()=>{
//     console.log("serverring http://localhost:3000")
// })

//Cach chuyen file router ra ngoai
var express = require("express");
var app = express();
var router = require("./router");
var chat = require("./chat.js");
//Cau hinh port chay o server process.env.PORT
//app.use(router);
app.use("/",router);
app.use("/chat",chat);
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("serverring http://localhost:3000")
})