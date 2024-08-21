var name = prompt("What is your name? ");

//a Isolate the first char
var firstChar = name.slice(0,1);

//b Turn first char upper case
var upperCaseFirstChar = firstChar.toUpperCase();

//c Isolate the rest of the name
var restOfName = name.slice(1,name.lenght);

//d Turn the rest of the name lower case
var lowerCaseRestOfName = restOfName.toLowerCase();

//e Concatenate the first char with the rest of the name
var captalisedName = upperCaseFirstChar + lowerCaseRestOfName;

// Hello, {name}.
alert("Hello, " + captalisedName);
