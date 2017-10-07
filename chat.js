const express = require("express");
const router = express.Router();

router.route("/").all((req, res)=>{
    res.send("This Chat router")

})
router.route("/user").all((req, res)=>{
    res.send("This Chat => user router")

})

module.exports = router;