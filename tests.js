const LinkedList = require ('./linked-list.js');

const l = new LinkedList([5,10,15,20]);

    // lst.insertAt(2, 12);
// lst.insertAt(5, 25);

l.insertAt(2,12)
console.log(l.getAt(0))
console.log(l.getAt(1))
console.log(l.getAt(2))
console.log(l.getAt(3))
console.log(l.getAt(4))
console.log(l.length)

console.log("**************************")
l.insertAt(5,25)
console.log(l.getAt(0))
console.log(l.getAt(1))
console.log(l.getAt(2))
console.log(l.getAt(3))
console.log(l.getAt(4))
console.log(l.getAt(5))
console.log(l.length)




