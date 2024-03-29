let story = "/“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”//Teacher: “Kids, what does the chicken give you?” Student: “Meat!” Teacher: “Very good! Now what does the pig give you?” Student: “Bacon!” Teacher: “Great! And what does the fat cow give you?” Student: “Homework!”//My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face./“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”/“Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others.”/“It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.”/“More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.”//Roses are red. Your blood is too. You look like a monkey And belong in a zoo. Do not worry, I'll be there too. Not in the cage, But laughing at you./“Success is not how high you have climbed, but how you make a positive difference to the world.”//A teacher wanted to teach her students about self-esteem, so she asked anyone who thought they were stupid to stand up. One kid stood up and the teacher was surprised. She didn’t think anyone would stand up so she asked him, “Why did you stand up?” He answered, “I didn’t want to leave you standing up by yourself.”//Whenever your ex says, “You'll never find someone like me,” the answer to that is, “That's the point.”//Girlfriend: “Am I pretty or ugly?” Boyfriend: “You're both.” Girlfriend: “What do you mean?” Boyfriend: “You're pretty ugly.”//A man is lying on the beach, wearing nothing but a cap over his crotch. A woman passing by remarks, “If you were any sort of a gentleman, you would lift your hat to a lady.” He replies, “If you were any sort of a sexy lady, the hat would lift by itself.”/“Pursue what catches your heart, not what catches your eyes.”/“Keep Going Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end.”//Light travels faster than sound. This is why some people appear bright until you hear them speak.//Q: Why did the can crusher quit his job? A: Because it was soda pressing.//How is Christmas like your job? You do all the work and the fat guy in the suit gets all the credit."
let story1 = "//An organization is like a tree full of monkeys, all on different limbs at different levels. The monkeys on top look down and see a tree full of smiling faces. The monkeys on the bottom look up and see nothing but assholes.//A doctor reaches into his smock to get a pen to write a prescription and pulls out a rectal thermometer. “Oh, damn it,” he proclaims, “Some asshole has my pen!”/“It's not the load that breaks you down, it's the way you carry it.”/“Start each day with a positive thought and a grateful heart.”/“Be grateful for what you already have while you pursue your goals. If you aren’t grateful for what you already have, what makes you think you would be happy with more.”//A guy and his wife are sitting and watching a boxing match on television. The husband sighs and complains, “This is disappointing. It only lasted for 30 seconds!” “Good,” replied his wife. “Now you know how I always feel.”/“Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.”"

const array1 = story.split('/');
const array2 = story.split('//');
const array11 = story1.split('/');
const array12 = story1.split('//');
const myArray = array1.concat(array11);

let quoteArray = myArray.filter(word =>
    {
      return word !== '';
    })
let jokeArray = array2.concat(array12);

// choose a random quote.
let currentQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];


// choose a random joke.
let currentJoke = jokeArray[Math.floor(Math.random() * jokeArray.length)];


// Function to generate a message on user's screen.
const generateMessage = num => (num % 2 == 0) ? currentQuote : currentJoke;

computerNumber = Math.floor(Math.random() * 20);
console.log(generateMessage(computerNumber));