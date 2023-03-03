var name1= "Abraham Lincolin once said,\" I m walking slowly but not walking backward\"";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());

function toTitleCase(name){
    var title = name.toLowerCase().split('').map(word =>
         
        {
          var til = word.charAt(0).toUpperCase()+ word.substring(1).toLowerCase();
          return til;
    }).join('');
    return title;
}
console.log(toTitleCase(name1))