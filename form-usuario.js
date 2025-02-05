var btnCadastrar = document.querySelector("#btnCadastrar");

btnCadastrar.addEventListener("click", function (event) {
    event.preventDefault();

    var nome = document.querySelector("#nome").value;
    var email = document.querySelector("#email").value;
    var telefone = document.querySelector("#telefone").value;
    var dataNascimento = document.querySelector("#data_nascimento").value;
    var qtdInstituicoes = document.querySelector("#qtd_instituicoes").value;
    var novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${telefone}</td>
        <td>${dataNascimento}</td>
        <td>${qtdInstituicoes}</td>
    `;
    
    var tabela = document.querySelector("#tabela tbody");
    tabela.appendChild(novaLinha);

    document.querySelector("#formUsuario").reset();
});