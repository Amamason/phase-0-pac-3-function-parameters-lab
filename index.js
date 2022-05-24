const name = "Josh";
const language = "Ember.js";

function introduction(name) {
return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage (name, language) {
return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
/*
function sayHelloTo(firstName = "User") {
console.log(`Hello, ${firstName}!`);
}
*/
const firstName = "Gracie";
function introductionWithLanguageOptional (name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
    }