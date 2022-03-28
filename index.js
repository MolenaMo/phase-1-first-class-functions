// function receivesAFunction(spy){
//     //const spy = chai.spy()
// }

function receivesAFunction(goHome){
    goHome()
}

function returnsANamedFunction(){
    return receivesAFunction
}


function returnsAnAnonymousFunction(){
 
return function(){}
}
//returnsAnAnonymousFunction(function(){return "Testing"})
