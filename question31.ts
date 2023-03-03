var user_name = ["admin", "muzammil", "hamza", "mohsin", "noman"];

for(var i= user_name.length; i>=0; i--)
{
if(user_name.length==0){
    console.log("empty array");
    console.log("We need to find some users");
}
else {
    user_name.pop();
    console.log("Remove");
}

}