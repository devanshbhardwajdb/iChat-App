const socket = io('http://localhost:8000');
const form2 = document.getElementById('send-container2');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('message-inp');
const messageContainer = document.querySelector('.container');
const messageInput2 = document.getElementById('message-inp2');


const audio = new Audio('tune.mp3');

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;

    if (position == 'left') {
        audio.play();
    }
}

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value;
        append(`You: ${message}`, 'right');
        socket.emit('send', message);
        messageInput.value = ""
    });

    const str = window.location.search;
    const Name = str.slice(6, -1)
    console.log(Name);


    socket.emit('new-user-joined', Name);
    socket.on('user-joined', Name => {
        append(`${Name} joined the chat`, 'left');
    })

    socket.on('receive', data => {
        append(`${data.Name}: ${data.message}`, 'left');
    });

    if (Name != null) {
        socket.on('left', Name => {
            append(`${Name} left the chat`, 'left');
        });
    }
}


// const Name = prompt("Enter your name to Join.");




form2.addEventListener('submit', (e) => {

    e.preventDefault();
    console.log("hello wolrd")
    const Name = messageInput2.value;

    if (Name != "") {

        // console.log(Name);
        window.location.href = "index.html?name=" + Name + "m";
    }
    else {
        alert("Name Field cannot be empty.")
    }



})








