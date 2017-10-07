module.exports = (req, res, next) =>{
    let body1 = req.body;
    //res.send(body1);
    res.json(body1);
    console.log(req.body)
}


//Gia lap cho phuong thuc res.send(), res.json()
// const res = {
//     send(params){
//         res.header("Content-Type", "text/plain");
//         res.write(params);
//         res.end();
//     },
//     json(params){
//         res.header("Content-Type", "application/json");
//         res.write(params);
//         res.end();
//     }
// }

