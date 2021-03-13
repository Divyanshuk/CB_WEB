
console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(1,4,2,3));
console.log(Math.min(1,4,2,3));
console.log(Math.round(6.67));
console.log(Math.floor(4.8));
console.log(Math.random());// generate number b/w 0 to 1 of float value;

// Go to mdn to see all math methods and constants;

console.log(Math.round(Math.random()*10)); // To generate 0 to 10 random value

console.log(Math.round(Math.random()*5)+22); // To generate 22 to 27 random value


/////////

console.log('1' == 1); //True: as they are typecasted to one type : it is non-strict/Abstract equality operator
console.log('11' == 10); //False

console.log('1' === 1); //False: It is strict equality operator, does not perform type conversion

console.log('' == 0); //True: empty string typecasted to 0


//Conditionals

let num = 10;

if(num > 5){
    console.log("Number is greater than 5");
}

///////////

let age = prompt("Enter Your Age:");
console.log("Age is", age);
console.log(typeof age); //Prints String, to convert it to integer, we have a method parseInt(age);
console.log(typeof parseInt(age)); // Prints number

console.log(parseInt("234")); //prints 234
console.log(parseInt("2332 agdfgsdgfasfsd")); //prints 2332
console.log(parseInt("agdfgsd 34343 gfasfsd")); // prints NaN

