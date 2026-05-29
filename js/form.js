//class contato
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, tipoContato, mensagem) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.tipoContato = tipoContato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value
    );

    console.log("Dados recebidos do usuário:", data);
}

function Enviar() {
    var nome = document.getElementById("nomeid");
    var sobrenome = document.getElementById("sobrenomeid");

    if (nome && nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + '' + sobrenome.value + ' os seus dados foram encaminhados com sucesso!');
    }
}
//LGPD
document.addEventListener("DOMContentLoaded", function () {
    const checkboxTermos = document.getElementById("termos");
    const btnEnviar = document.getElementById("btnEnviar");

    if (checkboxTermos && btnEnviar) {
        
        function alternarBotao() {
            // Se a caixinha dos termos estiver marcada
            if (checkboxTermos.checked) {
                btnEnviar.disabled = false; 
            } 
            // Se não estiver marcada
            else {
                btnEnviar.disabled = true; 
            }
        }

        // Escuta o clique do usuário no checkbox
        checkboxTermos.addEventListener("change", alternarBotao);

        // Executa uma vez ao carregar a página
        alternarBotao();
    }
});