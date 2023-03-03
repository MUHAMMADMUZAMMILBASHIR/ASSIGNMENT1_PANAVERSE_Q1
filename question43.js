"use strict";
var magician = ["Muzammil", "Hamza", "Mohsin"];
var newMagician = magician;
function show_Magician(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i].valueOf());
    }
}
function update_Magician(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log("Great " + magician[i].valueOf());
    }
}
update_Magician(newMagician);
show_Magician(magician);
