var addContructor = new Function('x', 'y', 'return x + y');

function addStatement (x, y) {
    return x + y;
}

var addExpression = function(x, y) {
    return x + y;
}

console.log(addContructor(20, 20));
console.log(addStatement(2, 2));
console.log(addExpression(4, 4));