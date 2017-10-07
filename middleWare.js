function getMyName(req, res, next){
    req.myName = "Diep Van function";
    next();
}
//cach 1:
//module.exports.getMyName = getMyName;

function log(req, res, next){
    console.log("AAAAAAAAA"+ req.path);
    next();
}
//Cach1: 
//module.exports.log = log;

// //Cach 2
module.exports= {getMyName, log}; //Module.exports la Object, nen them thuoc tinh cho Object thoai mai

//Cach 3 = cach 2
// const module ={
//     exports:{
//         getMyName: getMyName,
//         log: log // Tuong duong khi cung ten log: log
//     }
// }

//Khong dung exports// vi da gan cho nho den vung nho khac
//exports = {'getMyName': getMyName, 'log': log}