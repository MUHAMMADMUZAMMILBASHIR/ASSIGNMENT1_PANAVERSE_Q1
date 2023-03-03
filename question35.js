"use strict";
var Animals = ["loin", "dog", "cow"];
for (var i = 0; i < Animals.length; i++) {
    console.log(Animals[i]);
}
console.log("\n");
for (var j = 0; j < Animals.length; j++) {
    if (Animals[j] == "loin") {
        console.log(Animals[j].valueOf() + " is king of Jungle");
    }
    else if (Animals[j] == "cow") {
        console.log(Animals[j].valueOf() + " gives milk");
    }
    else if (Animals[j] == "dog") {
        console.log(Animals[j].valueOf() + " is good pet");
    }
}
console.log("\nThese all Animals have 4 legs");
