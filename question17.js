"use strict";
var list = ["waqas", "Talha", "Rashid", "Ali", "Haider", "Sami"];
console.log(list.length);
console.log("       I Have Dinning Place For Only 2 Guest      ");
while (true) {
    if (list.length - 1 <= 1) {
        for (var j = 0; j < list.length; j++) {
            console.log(list[j] + "U are invited");
        }
        break;
    }
    else {
        console.log(list.pop() + "Soory Ur Not Invited");
        // list.length -1;
    }
}
console.log("           Two Person Left        ");
for (var i = 0; i < list.length; i++) {
    ;
    console.log(list[i] + " you are invited");
}
console.log("           No Person Left        ");
for (var i = list.length - 1; i >= 0; i--) {
    console.log(list.pop() + " you are not invited");
}
console.log(list.length + "These person left in Array");
