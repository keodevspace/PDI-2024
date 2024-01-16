// jogo de adivinhação
// 1. gerar um número aleatório entre 1 e 100
// 2. criar um input para receber o número
// 3. criar um botão para enviar o número digitado
// 4. criar uma div para mostrar o resultado

// <!DOCTYPE html>
// <html lang="pt-br">
// <head>
//     <meta charset="UTF-8">
//     <title>Jogo de Adivinhação</title>
//     <link rel="stylesheet" href="css/style.css">
// </head>
// <body>
//     <div class="container">
//         <h1>Jogo de Adivinhação</h1>
//         <p>Estou pensando em um número entre 1 e 100. Você consegue adivinhar qual é?</p>
//         <form action="jogo.php" method="post">
//             <input type="number" name="numero" placeholder="Digite um número">
//             <input type="submit" value="Enviar">
//         </form>
//     </div>
//     <script src="script.js"></script>
// </body>
// </html>

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

let palpites = document.querySelector('.palpites');
let ultimoResultado = document.querySelector('.ultimoResultado');
let baixoOuAlto = document.querySelector('.baixoOuAlto');

let envioPalpite = document.querySelector('.envioPalpite');

function conferirPalpite() {
    let palpiteUsuario = Number(envioPalpite.value);

    if {
        palpites.textContent += palpiteUsuario + ' ';
    } else {
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }
}

envioPalpite.addEventListener('click', conferirPalpite);















