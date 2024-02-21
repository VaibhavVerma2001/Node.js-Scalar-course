// Custom middlewares

// next method tells that work is done and now pass control to other middleware

function myMiddleware1(req,res,next){
    console.log("I am custion middleware ...");

    next(); //otherwise we dont get response
}


function myMiddleware2(req,res,next){
    console.log("I am the second custion middleware ...");

    next(); //otherwise we dont get response
}


module.exports = {
    myMiddleware1,
    myMiddleware2
}