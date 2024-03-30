let message;

const messageGeneratorDisplay = document.getElementById('Message');
const generateButton = document.getElementById('generate');

generateButton.addEventListener('click', () => {
    message = generateMessage(computerNumber);
    messageGeneratorDisplay.innerHTML = message;
    messageGeneratorDisplay.style.marginLeft = 'auto';
    messageGeneratorDisplay.style.color = 'black';
})