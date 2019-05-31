// const greeting = (fname, lname) =>{
//     console.log(`${fname} ${lname}`);
// }

// setTimeout(() => {
//     console.log('inside the time out')
// }, 2000)

// console.log('before the function call')
// greeting('Chris', 'Humphrey')
// console.log('after the function call')




// CALLBACKS
// numbers
// const add = (a, b, callback) => {
//     let result = a + b;
//     callback(result);
// }

// add(4, 5, function(passedInResult){
//     console.log(passedInResult)
// })


const add = (pathURL, callback) => {
    let request = {
        url: pathURL,
        objType: "request"
    };
    let response = {
        objType: "response"
    }
    callback(request, response);
}

add('/something', function(req, res){
    console.log(req.url);
    console.log(req.objType);
    console.log(res.objType);
})
