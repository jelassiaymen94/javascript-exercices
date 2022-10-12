console.log(
	`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);

console.log(
	`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

console.log(typeof +"10" == typeof 10);

console.log(parseFloat("9.8") == 9.8);

console.log("python".includes("on"));
console.log("jargon".includes("on"));

console.log("I hope this course is not full of jargon".search("jargon"));

console.log(Math.floor(Math.random() * 100) + 1);

console.log(Math.floor(Math.random() * (100 - 50) + 50));

console.log(Math.floor(Math.random() * 255) + 1);

let randoms = "Javascript";

console.log(randoms[Math.floor(Math.random() * randoms.length)]);

console.log(
	`\n 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125`
);

let because =
	"You cannot end a sentence with because because because is a conjunction";

console.log(
	because.substr(because.indexOf("because", 1), "because".length * 3 + 2)
);
