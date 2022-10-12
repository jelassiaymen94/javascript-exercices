let challenge = "Zone4Code JavaScript";
console.log(challenge);
console.log(challenge.length);

let challengeUppercase = challenge.toUpperCase;
let challengeLowercase = challenge.toLowerCase;
let cut = challenge.substring(0, 9);
console.log(cut);
let slice = challenge.slice(0, 9);
console.log(slice);

console.log(challenge.includes("Script"));

console.log(challenge.split());
console.log(challenge.split(" "));

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(companies.split(","));

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(5)); // C

console.log(challenge.charCodeAt(10));

console.log("Zone4Code of JavaScript".indexOf("a"));

console.log("Zone4Code  Of JavaScript".lastIndexOf("a"));

let phrase =
	"You cannot end a sentence with because because because is a conjunction";

console.log(phrase.indexOf("because"));

console.log(phrase.lastIndexOf("because"));

console.log(phrase.search("because"));

console.log("    Zone4Code JavaScript   ".trim());

console.log(challenge.startsWith("Zone4Code"));

console.log(challenge.endsWith("JavaScript"));

console.log(challenge.match(/a/g));

console.log("Zone4Code".concat(" ", "JavaScript"));

console.log(challenge.repeat(2));
