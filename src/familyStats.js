/*
[
    { name, age },
    { name, age },
    { name, age },
    { name, age },
    { name, age },
    { name, age },
    { name, age },
]
*/
function oldest(family){
    let oldestPerson = { 
        name: "", 
        age: 0 
        };
    for (i = 0; i < family.length; i++){
        if (family[i].age > oldestPerson.age){
            oldestPerson = family[i];
        }
    }
    return oldestPerson; //The name of the oldest member of that family
}

function youngest(family){
    let youngestPerson = {
        name: "I'm Young",
        age: 1000
    };
    family.forEach(function(person){
        if(person.age < youngestPerson.age){
            youngestPerson = person;
        }
    })
    return youngestPerson;
}

const oldestName = oldest([
    { name: 'Matt', age: 36 },
    { name: 'Tara', age: 34 },
    { name: 'Analice', age: 52 },
    { name: 'Rachel', age: 9 },
]); // -> 'Matt'
console.log("Hello " + oldestName.name + ", you're the oldest!");

const youngestName = youngest([
    { name: 'Matt', age: 36 },
    { name: 'Sarah', age: 3 },
    { name: 'Tara', age: 34 },
    { name: 'Analice', age: 52 },
    { name: 'Rachel', age: 9 },
]); // -> 'Rachel'
console.log("Hello " + youngestName.name + ", you're the youngest!");

module.exports = { oldest, youngest };

// src/: node ./familyStats.js
