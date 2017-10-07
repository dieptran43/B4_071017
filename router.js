const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

var middleModule = require("./middleWare"); 
router.use(middleModule.getMyName); //se gan gia tri cho thang cuoi cung
router.use(middleModule.log);

//Cau hinh local
let urlEncoded = bodyParser.urlencoded({extended: false});
let json = bodyParser.json();

router.route("/")
.get(middleModule.getMyName, require("./middleware/getDefault"))
.post(urlEncoded, json, require("./middleware/postDefault"));

module.exports = router;