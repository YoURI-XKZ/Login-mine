



let user = prompt("Crie Usuario")
let senha = prompt("Crie Senha")




const audio = document.getElementById("backgroundMusic");
        audio.play();






document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    if (username === `${user}` && password === `${senha}`) {
        messageDiv.style.color = 'green';
        messageDiv.innerText = `Bem vindo de volta ${username}!`;


        setTimeout(function () {
            window.open ("https://www.minecraft.net/pt-br/download","_blank") // Redireciona para outra página após 5 segundos
        }, 3000);
    } else {
        messageDiv.style.color = 'red';
        messageDiv.innerText = 'Usuário ou senha incorretos!';
    }
});









const backgrounds = [
    'url("minecraft_landscape___i_by_muusedesign_d4d1kny.jpg")',
    'url("minecraft_landscape___ii_by_muusedesign_d4d4uf1.jpg")',
    'url("minerising___minecraft_sunrise_by_muusedesign_d4b6okx.jpg")'
];

let currentIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = backgrounds[currentIndex];
    currentIndex = (currentIndex + 1) % backgrounds.length;
}


setInterval(changeBackground, 3000);


changeBackground();
