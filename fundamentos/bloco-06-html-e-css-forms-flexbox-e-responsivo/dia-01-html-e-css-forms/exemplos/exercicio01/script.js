// <!--Agora vamos utilizar um pouco de javascript, para isso crie o arquivo script.js e o referencie no HTML.
// Dica: Coloque a tag <script> no final do seu body. -->

// <!--3 - Interrompa o comportamento padrão do botão submit utilizando o método preventDefault(). Nossa amiga Carol Silva nos contou um pouco sobre como fazer isso, lembra? -->
let botaoSubmit = document.getElementById('enviar');

function interromperBotao(event) {
    event.preventDefault();
}
botaoSubmit.addEventListener('click', interromperBotao);