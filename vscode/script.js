// Function to choose a random quote.
const getCurrentQuote = arr1 => {
  for (let i=0; i < arr1.length - 1; i++) {
    currentQuote = arr1[Math.floor(Math.random() * arr1.length)];
    return arr1[i];
 }
}
const currentQuote = getCurrentQuote();

// Function to choose a random joke.
const getCurrentJoke = arr2 => {
  for (let j=0; j < arr2.length - 1; j++) {
    currentJoke = arr2[Math.floor(Math.random() * arr2.length)];
    return arr2[j];
 }
}
const currentJoke = getCurrentJoke();

// Function to generate a message on user's screen.
const generateMessage = computerNumber => {
  computerNumber = Math.floor(Math.random() * 20);
  (computerNumber % 2 == 0) ? currentQuote : currentJoke;
}
console.log(computerNumber);
console.log(getCurrentQuote());
console.log(getCurrentJoke());
console.log(generateMessage());