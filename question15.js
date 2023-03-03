"use strict";
var mylist = ["muzammil", "wajahat", "jabir"];
for (var i = 0; i < mylist.length; i++) {
    console.log(mylist[i] + " you are invited");
}
console.log("\n");
console.log(mylist[1] + ' ' + "Cannot make dinner\n");
mylist[1] = "hamza";
for (var i = 0; i < mylist.length; i++) {
    console.log(mylist[i] + " you are invited");
}
