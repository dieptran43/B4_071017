let users =[
    {name: 'user1'},
    {name: 'user2'},
    {name: 'user3'},
    {name: 'user4'},
    {name: 'user5'},
 ];


module.exports = (req, res, next)=>{
    //res.send(`My name: ${req.myName}`);
    res.render('index', {users});
}