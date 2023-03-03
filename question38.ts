describe_city("Islamabad", "Pakistan");

function describe_city(nam, countryname) {
    if (countryname === void 0)
     { countryname = "Pakistan"; }
    console.log(nam + " is The Capital of " + countryname);
}