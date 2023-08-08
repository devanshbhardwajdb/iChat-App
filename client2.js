const socket1 = io('http://localhost:8000');
const form1 = document.getElementById('send-container');
const messageInput1= document.getElementById('message-inp');
const messageContainer1 = document.querySelector('.container');
const audio1 = new Audio('tune.mp3');

const append1 = (message, position) => {
    const messageElement1 = document.createElement('div');
    messageElement1.innerText = message;
    messageElement1.classList.add('message');
    messageElement1.classList.add(position);
    messageContainer1.append(messageElement);

    if (position == 'left') {
        audio1.play();
    }
}

// const Name = prompt("Enter your name to Join.");





form1.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append1(`You: ${message}`, 'right');
    socket1.emit('send', message);
    messageInput1.value = ""



});

