import { API_KEY } from "./api.js";
const input = document.querySelector("textarea");
const btn = document.querySelector("#done");
const main = document.querySelector(".main");

btn.addEventListener("click", (e) => {
    if (input.value != '') {
        const userMsg = input.value.trim();
        e.preventDefault();
        main.innerHTML += `<div class="outgoing-chat"><li>${userMsg}</li></div>`;
        setTimeout(() => {
            main.innerHTML += (`<div class="incoming-chat"><div class="Hacker"><img src="https://aaah0mnbncqtinas.public.blob.vercel-storage.com/7qNsOOMwxV-no-background-qlt5YaxRta8YB9ryrpTNJUX9OmhLfU.png"/><li>${userMsg}</li></div></div>`);
            generateResponse()
        }, 2000);
        input.value = '';
    }
});
