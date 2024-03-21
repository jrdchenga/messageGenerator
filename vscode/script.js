let quoteArray = [];
let jokeArray = [];


// choose a random quote.
let currentQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
console.log(currentQuote);

// choose a random joke.
let currentJoke = jokeArray[Math.floor(Math.random() * jokeArray.length)];
console.log(currentJoke);

// Function to generate a message on user's screen.
function generateMessage(computerNumber) {
  computerNumber = Math.floor(Math.random() * 20);
  (computerNumber % 2 == 0) ? currentQuote : currentJoke;
}