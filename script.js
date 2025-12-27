// Task 1
const firstName = "Adil";
const jobTitle = "Junior Developer";
let yearsOfExperience = 0;

console.log(firstName);
console.log(jobTitle);
console.log(yearsOfExperience);

// Task 2
// const birthYear = 2005;
// const isLearningJS = true;

// console.log(birthYear, isLearningJS);

// birthYear = 2006;

// Task 3
let population = 20;
let halfPopulation = population / 2;
let isGreaterToFindland = population > 6;

console.log(halfPopulation, isGreaterToFindland);

// Task 4
// "My name is Adil, I am a Junior Developer with 0 years of experience. I live in a country with 20 million people."
console.log(
  `My name is ${firstName}, I am a ${jobTitle} with ${yearsOfExperience} years of experience. I live in a country with ${population} million people.`
);

let nextProject;
let completedProject = null;
console.log(typeof nextProject);
console.log(typeof completedProject);

let startsInGalaxy = 9007199254740991n;
console.log(typeof startsInGalaxy);

// let sotalStuff = startsInGalaxy + 10;

let value1 = "5" - 2;
let value2 = "5" + 2;
console.log(value1);
console.log(value2);

// if/ else
// Task 1
let guestAge = 16;
const MIN_AGE = 21;

if (guestAge >= MIN_AGE) {
  console.log("Welcome to the club! 🍻");
} else {
  let yearsToWait = MIN_AGE - guestAge;
  console.log(
    `Sorry, come back in ${yearsToWait} ${
      yearsToWait === 1 ? "year" : "years"
    }.`
  );
}

// Task 2
const currentTemp = 25;

if (currentTemp > 30) {
  console.log("It's a hot day! Stay hydrated. ☀️");
} else {
  console.log("The weather is lovely. 🌳");
}

// Task 3
const carYear = 1965;
let carType;

if (carYear < 2000) {
  carType = "Classic";
} else {
  carType = "Modern";
}

console.log(`This car is a ${carType} model.`);

// Coercion / Conversion
// Task 1
const birthYear = "2005";
const currentYear = 2025;

// console.log(currentYear - birthYear);
// const age = currentYear - Number(birthYear);
// console.log(age);

// Task 2
console.log("10" - "4" - 3 + "2");
console.log("5" + 2 + 3);
console.log((10 + 5) * "2");
console.log("100" / "10" - "1");
console.log("10" - "5" + "2");

// Task 3
let invalidNumber = Number("Hello");
console.log(typeof invalidNumber);
console.log(invalidNumber + 10);
// We get NaN because Number('Hello') fails to find digits, so it returns NaN
// So any mathematical operations performed with NaN results in NaN

// Truthy / Falsy
// Task 1
let username = "";
if (username) {
  console.log(`Welcome, ${username}!`);
} else {
  console.log("Please enter a valid username.");
}

// Task 2
let walletBalance = 10;
if (walletBalance && walletBalance > 0) {
  console.log("You have money! Let's go shopping. 🛍️");
} else {
  console.log("You're broke. Stay home. 🏠");
}

// Task 3
let score = 0;
if (score !== undefined) {
  console.log(`Your score is ${score}`);
} else {
  console.log("No score recorded yet.");
}
// Because 0 is a falsy value

// Equality Operators == / ===
// Task 1
const secretCode = "1234";
if (secretCode == 1234) console.log("Loose: Access Granted.");

if (secretCode === 1234) console.log("Strict: Access Granted.");

// Task 2
const inputFromUser = "7";
let convertedInput = Number(inputFromUser);

if (convertedInput === 7) {
  console.log("Lucky number 7!");
} else if (convertedInput === 23) {
  console.log("The classic 23!");
} else {
  console.log("Just a regular number.");
}

// Task 3
let currentDay = "Monday";

if (currentDay !== "Saturday" && currentDay !== "Sunday")
  console.log("Ugh, I have to work today. 💼");

// The switch statement
// Task 1
let coffeeType = "espresso";

switch (coffeeType) {
  case "espresso":
    console.log("$2.50");
    break;
  case "latte":
    console.log("$3.50");
    break;
  case "cappuccino":
    console.log("$4.00");
    break;
  default:
    console.log("Sorry, we don't serve that here.");
}

// Task 2
let month = "January";

switch (month) {
  case "December":
  case "January":
  case "February":
    console.log("It's winter! ❄️");
    break;
  case "March":
  case "April":
  case "May":
    console.log("It's spring! 🌸");
    break;
  case "June":
  case "July":
  case "August":
    console.log("It's summer! ☀️");
    break;
  case "September":
  case "October":
  case "November":
    console.log("It's Autumn! 🍂");
    break;
  default:
    console.log("Invalid month! ⚠️");
}

// Task 3
const language = "spanish";

if (language === "chinese" || language === "mandarin") {
  console.log("MOST number of native speakers!");
} else if (language === "spanish") {
  console.log("2nd place in native speakers");
} else if (language === "english") {
  console.log("3rd place");
} else {
  console.log("Great language too! :D");
}

// Ternary Operators
// Task 1
let speed = 70;
let status = speed > 60 ? "speeding" : "safe";

console.log(`The driver is ${status}`);

// Task 2
let bill = 40;

console.log(
  `The total is $${(bill > 50 ? bill * 1.2 : bill * 1.15).toFixed(2)}`
);

// Task 3
const age = 18;
let canVote;
if (age >= 18) {
  canVote = "Yes, you can vote!";
} else {
  canVote = "No, too young.";
}
console.log(canVote);

let billValue = Number("100");

console.log(
  `The bill was ${billValue}, the tip was ${
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2
  }, and the total value ${
    billValue +
    (billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2)
  }`
);

let billValue1 = Number("100");

let tip =
  billValue >= 50 && billValue1 <= 300 ? billValue1 * 0.15 : billValue1 * 0.2;

console.log(
  `Your bill was ${billValue1}, the tip was ${tip}, and the total value is ${
    billValue1 + tip
  }`
);
