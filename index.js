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
 
return returnsAnAnonymousFunction
}
returnsAnAnonymousFunction(function(){return "Testing"})
