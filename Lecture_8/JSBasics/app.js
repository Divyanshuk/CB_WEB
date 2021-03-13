alert("Hello World");

let firstName = "Divyanshu";
let lastName  = "Kumar"    ;

console.log("Hi this is just a log");
// will learn dir later on 
console.dir("hello world"); 
console.warn("This is demo my last warning");
console.error("This is demo error");


console.log("My name is", firstName);
console.log("My name is " + lastName);

let fullName = `My full name is ${2+3-1}`; //Backticks - key below escape key
console.log(fullName);

fullName = `My full name is ${firstName} ${lastName}`;
console.log(fullName);

console.log(`Mr. ${lastName}, ${firstName}`);