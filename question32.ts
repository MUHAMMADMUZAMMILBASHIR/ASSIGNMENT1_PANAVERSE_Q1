var  current_users = [ "muzammil", "hamza", "mohsin", "noman"];
var new_users = [ "muzammil", "hamza", "jawad", "ahsan"];

for (var i = 0; i < current_users.length; i++) {
    for (var j = 0; j < new_users.length; j++) 
    {
        if (current_users[i] == new_users[j])
         {
            console.log(current_users[i].valueOf()+''+ " the person will need to enter a new username");
        }
        
    }
    if(new_users[j] = "jawad")
        {
            console.log(new_users[j].valueOf()+''+ " the username is available.");
        }
        if(new_users[j] ="ahsan")
        {
            console.log(new_users[j].valueOf()+''+ " the username is available.");
        }
}