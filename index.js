function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction() {
    function fn() {}
    return fn;
}

function returnsAnAnonymousFunction() {
    return function(){};
}