const { spy } = require("chai")

function receivesAFunction(spy){
    spy();
    spy();
}
function returnsANamedFunction(){
    var fn= () => console.log("function")
    return fn;
}
function returnsAnAnonymousFunction(){
    return () => console.log("function");
}
