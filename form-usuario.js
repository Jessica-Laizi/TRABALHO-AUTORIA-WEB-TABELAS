function ordenarTabela(colunaIndex) {
    var tabela = document.querySelector("#tabela tbody");
    var linhas = Array.from(tabela.rows);

    linhas.sort(function (linhaA, linhaB) {
        var celulaA = linhaA.cells[colunaIndex].innerText.trim();
        var celulaB = linhaB.cells[colunaIndex].innerText.trim();

        return celulaA.localeCompare(celulaB); 
    });

    linhas.forEach(function (linha) {
        tabela.appendChild(linha);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var cabecalhoTabela = document.querySelectorAll("#tabela th");
    cabecalhoTabela.forEach(function (th, index) {
        th.addEventListener("click", function () {
            ordenarTabela(index); 
        });
    });
});

var btnCadastrar = document.querySelector("#btnCadastrar");

btnCadastrar.addEventListener("click", function (event) {
    event.preventDefault();

    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var telefone = document.querySelector("#telefone").value;
    var dataNascimento = document.querySelector("#data_nascimento").value;

    var novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${telefone}</td>
        <td>${dataNascimento}</td>
    `;
    
    var tabela = document.querySelector("#tabela tbody");
    tabela.appendChild(novaLinha);

    document.querySelector("#formUsuario").reset();
});
