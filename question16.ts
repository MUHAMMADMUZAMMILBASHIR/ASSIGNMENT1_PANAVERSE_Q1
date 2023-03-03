var mylist = ["muzammil", "wajahat", "jabir"];

for (var i = 0; i < mylist.length; i++) 
{
    console.log(mylist[i] + " you are invited");
}

console.log("\n");

console.log(mylist[1] + ' ' + "Cannot make dinner\n");

mylist[1] = "hamza";

for (var i = 0; i < mylist.length; i++)
 {
    console.log(mylist[i] + " you are invited");
}
// At Start
console.log("     I found a bigger dinner table");
// At middle
mylist.splice(0, 0, "Mohsin");
//At end
mylist.splice(Math.floor(mylist.length / 2), 0, "hussain");

mylist.splice((mylist.length + 1), 0, "imran");
// append();
for (var i = 0; i < mylist.length; i++)
 {
    console.log(mylist[i] + " you are invited");
}
function append() 
{
    mylist.splice((mylist.length + 1), 0, "imran");
}


