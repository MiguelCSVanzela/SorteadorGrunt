document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('form-sorteador').addEventListener('submit', function (event) {
        event.preventDefault();
        let numeroMaximo = document.getElementById('numeroSorteado').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo + 1;

        document.getElementById('resultadoValor').innerText = Math.floor(numeroAleatorio);
        document.querySelector('.resultado').style.display = 'block';
    })
})