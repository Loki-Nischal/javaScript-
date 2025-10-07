const text =" k xa bhai ";
//length of string
console.log("original string",text.length);

//trim -> remove whitespace
//chaining white space
console.log("length after trim",text.trim().length);

//Uppercase
console.log("UpperCase",text.toUpperCase());

//lowerCase
console.log("Lowercase",text.toLowerCase());

//starts with
const fruit = " Graps is good";
console.log("starts with",fruit.trim().toLowerCase().startsWith('g'));

//endsWith
console.log("ends with",fruit.endsWith('s'));


//bicho ko check garna peryo bhane
console.log("include",fruit.includes('p'));


//slice
const str = "This is slice string method";
console.log("sliced string",str.slice(8,13));

//replace
//default ma chai let hunxa
birthday = "2000-03-28";
console.log("Replace:",birthday.replaceAll('-','/'));