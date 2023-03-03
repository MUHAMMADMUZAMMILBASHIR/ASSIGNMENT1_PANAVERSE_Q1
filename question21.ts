// program to create JavaScript object using object literal
var person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],

    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);
console.log(person.hobbies[0]);
console.log(person.score.maths);