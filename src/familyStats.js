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
        name: "I'm younger than you think", 
        age: 0 
        };
    // for (i = 0; i < family.length; i++){
    //     if (family[i].age > oldestPerson.age){
    //         oldestPerson = family[i];
    //     }
    // } this works but I want to try writing a forEach so it's commented out for testing.
    family.forEach(function(person){
        if(person.age > oldestPerson.age){
            oldestPerson = person;
        }
    })
    return oldestPerson; //The name of the oldest member of that family
}

function youngest(family){
    let youngestPerson = {
        name: "I'm not that Young",
        age: Infinity
    };
    family.forEach(function(person){
        if(person.age < youngestPerson.age){
            youngestPerson = person;
        }
    })
    return youngestPerson;
}
 let myTestFamily = [
    { name: 'Matt', age: 36 },
    { name: 'Sarah', age: 3 },
    { name: 'Tara', age: 34 },
    { name: 'Analice', age: 52 },
    { name: 'Rachel', age: 9 },
];
const oldestName = oldest(myTestFamily); // -> 'Analice'
console.log("Hello " + oldestName.name + ", you're the oldest!");

const youngestName = youngest(myTestFamily); // -> 'Sarah'
console.log("Hello " + youngestName.name + ", you're the youngest!");

module.exports = { oldest, youngest };

// src/: node ./familyStats.js
