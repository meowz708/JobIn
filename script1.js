document.addEventListener("DOMContentLoaded", () => {
    const socket = io();

    socket.on("chat message", (msg) => {
        displayMessage(msg, "bot");
    });

    document.getElementById("message-input").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;

    if (message.trim() === "") return;

    displayMessage(message, "user");

    // Send message to the server
    const socket = io();
    socket.emit("chat message", message);

    // Clear the input field
    messageInput.value = "";
}

function displayMessage(message, sender) {
    const chatContainer = document.getElementById("chat-container");
    const messageElement = document.createElement("div");
    messageElement.className = sender === "user" ? "user-message" : "bot-message";
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatContainer.appendChild(messageElement);

    // Scroll to the bottom of the chat container
    chatContainer.scrollTop = chatContainer.scrollHeight;
}
