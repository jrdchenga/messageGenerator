let message;

const messageGeneratorDisplay = document.getElementById('message');
const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', () => {
    message = generateMessage(computerNumber);
    messageGeneratorDisplay.innerHTML = message;
})