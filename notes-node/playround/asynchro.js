function Add(a, b){
    return a + b;
}

function LazyAdd(a, cb){
    return function(b){
        return cb(a, b);
    }
}

var result = LazyAdd(1, Add);

console.log("some times later");

console.log('get result : ', result);


console.log('get result : ', result(2));
