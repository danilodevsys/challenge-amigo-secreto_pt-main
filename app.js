//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", function () {
    let listaDeAmigos = [];

    function pegarNomeDigitado() {
        return document.getElementById("amigo").value.trim();
    }

    function adicionarNome() {
        let nome = pegarNomeDigitado();
        
        if (nome === "") {
            alert("Por favor, insira um nome.");
            return;
        }

        if (listaDeAmigos.includes(nome)) {
            alert("Este nome já foi adicionado!");
            return;
        }

        listaDeAmigos.push(nome);
        atualizarListaNaTela();
        limparCampo();
    }

    function atualizarListaNaTela() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

        listaDeAmigos.forEach(function (nome) {
            let item = document.createElement("li");
            item.textContent = nome;
            lista.appendChild(item);
        });
    }

    function limparCampo() {
        document.getElementById("amigo").value = "";
    }

    function sortear() {
        if (listaDeAmigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }

        let listaParaSortear = [...listaDeAmigos];
        let indiceSorteado = Math.floor(Math.random() * listaParaSortear.length);
        let amigoSorteado = listaParaSortear[indiceSorteado];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
    }

    document.querySelector(".button-add").addEventListener("click", adicionarNome);
    document.querySelector(".button-draw").addEventListener("click", sortear);
});


