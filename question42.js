"use strict";
var magician = ["Muzammil", "Hamza", "Mohsin"];
function show_Magician(mag) {
    for (var i = 0; i < mag.length; i++) {
        console.log(mag[i].valueOf());
    }
}
great_Magician(magician);
show_Magician(magician);
function great_Magician(mag) {
    for (var i = 0; i < mag.length; i++) {
        mag[i] = "Great " + mag[i];
        console.log(mag[i]);
    }
}
