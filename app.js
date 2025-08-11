<<<<<<< HEAD

let amigos = [];
let sorteados = [];
let paresSorteados = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById("amigo");
    let amigoNome = amigoInput.value.trim();

    if (amigoNome === "") {
        alert("Por favor, digite um nome para adicionar.");
        return;
    }

    if (amigos.includes(amigoNome)) {
        alert("Este nome já foi adicionado. Por favor, digite um nome diferente.");
        return;
    }

    amigos.push(amigoNome);
    let listaAmigos = document.getElementById("listaAmigos");
    let itemLista = document.createElement("li");
    itemLista.textContent = amigoNome;
    listaAmigos.appendChild(itemLista);
    amigoInput.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return;
    }

    if (amigos.length === paresSorteados.length) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let disponiveisParaSortear = amigos.filter(amigo => !sorteados.includes(amigo));

    if (disponiveisParaSortear.length === 0) {
        alert("Todos os amigos já foram sorteados!");
        return;
    }

    let sorteador = disponiveisParaSortear[Math.floor(Math.random() * disponiveisParaSortear.length)];
    
    let disponiveisParaSerSorteado = amigos.filter(amigo => amigo !== sorteador && !sorteados.includes(amigo));

    if (disponiveisParaSerSorteado.length === 0) {
        // Caso especial: se sobrou apenas uma pessoa e ela é o sorteador, ou se não há mais ninguém para ser sorteado
        // Isso pode acontecer se o número de participantes for ímpar e o último sorteador não tiver ninguém para tirar
        // Ou se a lógica de filtro acima for muito restritiva.
        // Para este desafio, vamos simplificar e apenas alertar que não há mais pares possíveis.
        alert("Não há mais pares únicos para sortear. Reinicie para um novo sorteio.");
        return;
    }

    let sorteado = disponiveisParaSerSorteado[Math.floor(Math.random() * disponiveisParaSerSorteado.length)];

    // Garante que o sorteador não tire a si mesmo e que o sorteado não seja alguém que já tirou ou foi tirado
    // A lógica de `disponiveisParaSerSorteado` já ajuda, mas vamos adicionar uma verificação extra para evitar ciclos imediatos
    while (sorteador === sorteado || paresSorteados.some(par => (par.sorteador === sorteador && par.sorteado === sorteado) || (par.sorteador === sorteado && par.sorteado === sorteador))) {
        if (disponiveisParaSerSorteado.length <= 1) {
            // Se só sobrou uma opção e ela é inválida, precisamos de uma estratégia diferente ou reiniciar
            alert("Não foi possível encontrar um par único para o sorteador. Reinicie para um novo sorteio.");
            return;
        }
        sorteado = disponiveisParaSerSorteado[Math.floor(Math.random() * disponiveisParaSerSorteado.length)];
    }

    sorteados.push(sorteador);
    sorteados.push(sorteado);
    paresSorteados.push({ sorteador: sorteador, sorteado: sorteado });

    let resultadoDiv = document.getElementById("resultado");
    let p = document.createElement("p");
    p.textContent = `${sorteador} tirou ${sorteado}`;
    resultadoDiv.appendChild(p);

    if (amigos.length === paresSorteados.length) {
        alert("Todos os amigos já foram sorteados!");
    }
}

function reiniciar() {
    amigos = [];
    sorteados = [];
    paresSorteados = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}
=======
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
>>>>>>> b18dc61483c496cd97851092a8e7c545f6d071ef


