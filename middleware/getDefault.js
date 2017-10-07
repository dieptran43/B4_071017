module.exports = (req, res, next)=>{
    res.send(`My name: ${req.myName}`);
}