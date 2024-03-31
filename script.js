const input = document.querySelector("textarea");
const btn = document.querySelector("#done");
const outgoingChat = document.querySelector(".outgoing-chat");
const main = document.querySelector(".main");
const incomingChat = document.querySelector(".incoming-chat");
// let incomingChat;


btn.addEventListener("click", (e) => {
    if (input.value != '') {
        e.preventDefault();
        outgoingChat.innerHTML += `<li>${input.value}</li>`;
        setTimeout(() => {
            incomingChat.innerHTML += (`<div class="Hacker"><img src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/7qNsOOMwxV-no-background-qlt5YaxRta8YB9ryrpTNJUX9OmhLfU.png"/><li>${input.value}</li></div>`);
            setTimeout(()=>{
                incomingChat.innerHTML += (`<div class="Hacker"><img src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/7qNsOOMwxV-no-background-qlt5YaxRta8YB9ryrpTNJUX9OmhLfU.png"/><li>How Are you bro?</li></div>`);
            },3000);
            input.value = '';
        }, 2000);
    }
});