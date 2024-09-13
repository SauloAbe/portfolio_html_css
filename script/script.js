document.getElementById('form-contato').addEventListener(
    'submit', function(e) {e.preventDefault();

// Pega os valores dos campos
const nome = 
        document.getElementById('nome').value;
const email = 
        document.getElementById('email').value;
const mensagem = 
        document.getElementById('mensagem').value;

// Exibe uma mensagem de agradecimento
alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);

});

