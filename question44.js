"use strict";
var sandwich = ["Tikka", "peprica", "lasani"];
function maker(sandwich) {
    console.log("you Orderd A " + sandwich);
}
for (var i = 0; i < sandwich.length; i++) {
    maker(sandwich[i]);
}
