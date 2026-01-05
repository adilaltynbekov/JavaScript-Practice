/*
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
*/

/* ********************************************************** */
/* ********************************************************** */
/* ********************************************************** */
/* ********************************************************** */
/* ********************************************************** */

// Functions Practice
// Task 1
function describeSystem() {
  console.log(`System is online and running... 🤖`);
}
describeSystem();
describeSystem();
describeSystem();

// Task 2
function calculateTotal(price, tip) {
  let summary = `The bill is ${price} and the tip is ${tip}.`;
  return summary;
}
const summary1 = calculateTotal(100, 20);
const summary2 = calculateTotal(50, 5);
console.log(summary1, summary2);

// Task 3
function calcAgeInDays(ageInYears) {
  return ageInYears * 365;
}
const ageInDays = calcAgeInDays(20);
console.log(`I'm approximately ${ageInDays} days old!`);

// Function Declarations vs. Expressions
// Task 1
console.log(calculateSquare(5));
function calculateSquare(number) {
  return number * number;
}
// console.log(calculateCube(5)); // Cannot access 'calculateCube' before initialization
const calculateCube = function (number) {
  return number * number * number;
};

// Task 2
function getRemainder(a, b) {
  return a % b;
}

const calcRemainder = function (a, b) {
  return a % b;
};
console.log(calcRemainder(10, 3));

// Task 3
const shout = function (shout) {
  return shout.toUpperCase();
};
const anotherShout = shout;

console.log(anotherShout("Hello"));

// Arrow functions
// Task 1
const square = (num) => num * num;
console.log(square(8));

// Task 2
const greetUser = (firstName, timeOfDay) => `Good ${timeOfDay}, ${firstName}!`;
console.log(greetUser("Adil", "afternoon"));

// Task 3
const yearsToCentury = (birthYear) => 100 - (2025 - birthYear);
console.log(yearsToCentury(2005));

// Functions Calling Other Functions
// Task 1
const celsiusToFahrenheit = (celsius) => celsius * (9 / 5) + 32;
const getWeatherReport = (city, tempCelsius) => {
  const tempF = celsiusToFahrenheit(tempCelsius);
  return `The temperature in ${city} is ${tempF} degrees Fahrenheit.`;
};
console.log(getWeatherReport("Almaty", 1));

// Task 2
const checkStock = (items) => items > 0;

const processOrder = (itemName, quantity) =>
  checkStock(quantity)
    ? `Order for ${quantity} ${itemName} is processing...`
    : `Sorry ${itemName} is out of stock.`;

console.log(processOrder("Football", 1));

// Task 3
const maskCharacter = (char) => "*";
const protectPassword = (password) => {
  const p1 = maskCharacter(password[0]);
  const p2 = maskCharacter(password[1]);
  const p3 = maskCharacter(password[2]);
  const p4 = maskCharacter(password[3]);
  return p1 + p2 + p3 + p4;
};
console.log(protectPassword("Adil"));

// Reviewing Functions
// Task 1
const applyDiscount = (price) => (price >= 50 ? price - 10 : price);
const calculateFinalPrice = function (rawPrice, taxRate) {
  const price = applyDiscount(rawPrice);
  taxMultiplier = taxRate /= 100;
  const total = price * (1 + taxMultiplier);
  return total < 0 ? 0 : total;
};
console.log(calculateFinalPrice(50, 3));

// Task 2
const calcAge = (birthYear) => 2026 - birthYear;
const getProfileSummary = function (birthYear, username) {
  const age = calcAge(birthYear);
  return age >= 13
    ? `User ${username} is ${age} years old.`
    : `Access Denied: User too young.`;
};
console.log(getProfileSummary(2005, "Adil"));
console.log(getProfileSummary(2014, "Vlad"));

// Task 3
const isEnergySavingMode = (currentTemp, targetTemp) =>
  currentTemp - 5 >= targetTemp;
const checkThermostat = function (currentTemp, targetTemp) {
  if (isEnergySavingMode(currentTemp, targetTemp)) {
    return "AC On";
  } else {
    return "AC Off";
  }
};

console.log(checkThermostat(25, 20));

// Introduction to Arrays
// Task 1
const teamMembers = ["Mike", "Will", "Lucas", "Dustin"];
teamMembers[1] = "Alex";
console.log(teamMembers);
console.log(teamMembers[2]);
console.log(teamMembers.length);

// Task 2
const currentYear = 2025;
const userProfile = ["Adil", "Altynbekov", currentYear - 2005, teamMembers];
console.log(userProfile);

// Task 3
/*
const prices = [100, 250, 400, 600];
const applyDiscount = (price) => price * 0.9;
const discountPrices = [
  applyDiscount(prices[0]),
  applyDiscount(prices[1]),
  applyDiscount(prices[prices.length - 1]),
];
console.log(discountPrices);
*/

// Task 4
const guests = ["Alice", "Bob", "Charlie", "David"];
// guests[guests.indexOf("Bob")] = "Edward";
guests[1] = "Edward";
console.log(guests);
console.log(guests[guests.length - 1]);

// Task 5
const myProfile = ["Adil", "Almaty", 2005, 2026 - 2005];

// Task 6
const inventory = ["Laptops", "Mice", "Keyboards"];
inventory[0] = "Tablets";
console.log(inventory);
const totalItems = inventory.length;
console.log(totalItems);

// Basic Array Operations (Methods)
// Task 1
const words = ["Hello", "there", "world"];
const deletedWord = words.pop();
console.log(deletedWord);

// Task 2
const blacklist = ["hacker123", "scammer99", "bad_actor"];
if (blacklist.includes("hacker123")) {
  console.log("Access Denied");
} else {
  console.log("Welcome!");
}

// Task 3
const queue = ["Alice", "Bob", "Charlie"];
queue.shift();
queue.push("David");
console.log(queue.indexOf("Charlie"));
console.log(queue);

// Introduction to Objects
// Task 1
const product = {
  name: "iPhone",
  price: 200,
  isStocked: true,
  tags: ["electronics", "mobile", "iPhone"],
  dimensions: {
    widthPx: 300,
    heightPx: 550,
    depthMm: 8,
  },
};

// Task 2
const socialPost = {
  author: "Adil",
  content: "Video",
  likesCount: 0,
  comments: [],
};

// Task 3
const myTesla = {
  model: "X",
  batteryLevel: 65,
  driveMode: "Sport",
};

// I think to use an object in this situation is better because it describes the object itself like it has a descriptive name and a description itself rather than using an array it would be just an array with just random data without names and so on

// Dot vs. Bracket Notation in JavaScript Objects
// Task 1
const userPrefs = {
  theme: "Dark Mode",
  language: "English",
  notifications: "Enabled",
};
console.log(userPrefs);

const keyToLookUp = "language";

console.log(userPrefs[keyToLookUp]);
userPrefs["theme"] = "Light Mode";
console.log(userPrefs);

// Task 2
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  accidents: 0,
};

// const userInput = prompt("What do you want to know about the car?");
// if (userInput in car) {
//   console.log(car[userInput]);
// } else {
//   console.log("Sorry, that information is not available.");
// }

// Task 3
const myPlaylist = {
  name: "Gym Mix",
  creator: "Adil",
  songs: ["Lose Yourself", "Eye of the Tiger", "Power"],
  stats: {
    playCount: 150,
    isPublic: true,
  },
};
console.log(
  `${myPlaylist["creator"]}'s playlist '${myPlaylist.name}' has ${myPlaylist.songs.length} songs and has been played ${myPlaylist.stats.playCount} times.`
);

// Objects Methods
// Task 1
const fitnessActivity = {
  type: "Running",
  steps: 10000,
  caloriesPerStep: 0.04,
  calculateCalories: function () {
    this.totalCalories = this.steps * this.caloriesPerStep;
  },
};
fitnessActivity.calculateCalories();
console.log(fitnessActivity);

// Task 2
const account = {
  owner: "Adil",
  balance: 100,
  isLocked: false,
  withdraw: function (amount) {
    if (this.isLocked) {
      return "Transactions Denied: Account Locked";
    } else if (amount > this.balance) {
      return "Insufficient funds";
    } else {
      this.balance -= amount;
      return this.balance;
    }
  },
};
console.log(account.withdraw(50));

// Task 3
const movie = {
  title: "Avatar",
  director: "James Cameron",
  releaseYear: 2009,
  rating: 7,
  isHit: function () {
    return this.rating >= 8;
  },
  getReview: function () {
    return `In ${this.releaseYear}, ${this.director} released '${
      this.title
    }'. It has a ${this.rating}/10 rating.${
      this.isHit() ? " - Highly Recommended!" : ""
    }`;
  },
};
console.log(movie.getReview());
console.log(movie.isHit());
