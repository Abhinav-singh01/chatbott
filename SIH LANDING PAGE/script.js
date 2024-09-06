const modal = document.querySelector(".modal");
const outlay = document.querySelector(".outlay");
const loginContainer = document.querySelector("#loginContainer");

// Function to open the modal
const openModal = () => {
    modal.classList.add("active");
    outlay.classList.add("overlayactive");
};

// Function to close the modal
const closeModal = () => {
    modal.classList.remove("active");
    outlay.classList.remove("overlayactive");
};

// Function to open the login container
const openLogin = () => {
    loginContainer.style.display = 'flex'; // Show login container
};

// Function to close the login container
const closeLogin = () => {
    loginContainer.style.display = 'none'; // Hide login container
};

// Event listener for send button in chat
document.getElementById('sendButton').addEventListener('click', function() {
    const input = document.getElementById('messageInput');
    const chatBox = document.getElementById('chatBox');
    
    if (input.value.trim() !== '') {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        
        const user = document.createElement('div');
        user.classList.add('user');
        user.textContent = 'You:';
        
        const text = document.createElement('div');
        text.classList.add('text');
        text.textContent = input.value;
        
        newMessage.appendChild(user);
        newMessage.appendChild(text);
        
        chatBox.appendChild(newMessage);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
        
        input.value = ''; // Clear the input field
    }
});

// Open login container when login button is clicked
document.querySelector('button[onclick="openLogin()"]').addEventListener('click', openLogin);

// Close login container if clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === loginContainer) {
        closeLogin();
    }
});
