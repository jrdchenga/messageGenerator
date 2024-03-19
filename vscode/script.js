const generateMessage = computerNumber => {
  computerNumber = Math.floor(Math.random() * 20);
  
  switch (computerNumber) {
    case 0:
      return "“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”";
      break;
    case 1:
      return "Why should you never trust stairs? They’re always up to something.";
      break;
    case 2:
      return "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”";
      break;
    case 3:
      return "When does a joke become a ‘dad’ joke? When it becomes apparent.";
      break;
    case 4:
      return "“Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others.”";
      break;
    case 5:
      return " Why did the bullet end up losing his job? He got fired.";
      break;
    case 6:
      return "“More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.”";
      break;
    case 7:
      return "What kind of shorts do clouds wear? Thunderpants";
      break;
    case 8:
      return "“Success is not how high you have climbed, but how you make a positive difference to the world.”";
      break;
    case 0:
      return "How do you measure a snake?  In inches—they don’t have feet.";
      break;
    case 10:
      return "“Pursue what catches your heart, not what catches your eyes.”";
      break;
    case 11:
      return "You heard the rumor going around about butter? Never mind, I shouldn’t spread it.";
      break;
    case 12:
      return "“Keep Going; Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end.”";
      break;
    case 13:
      return "The first rule of the Alzheimer’s club is… Wait, where are we again?";
      break;
    case 14:
      return "“It's not the load that breaks you down, it's the way you carry it.”";
      break;
    case 15:
      return "What do you get from a pampered cow? Spoiled milk.";
      break;
    case 16:
      return "“Start each day with a positive thought and a grateful heart.”";
      break;
    case 17:
      return "Why did the bicycle fall over? Because it was two-tired!";
      break;
    case 18:
      return "“Be grateful for what you already have while you pursue your goals. If you aren’t grateful for what you already have, what makes you think you would be happy with more.”";
      break;
    case 19:
      return "Why aren’t koalas considered bears? They don’t have the right koala-fications.";
      break;
    default:
      return "invalid";
  }
}
console.log(generateMessage());