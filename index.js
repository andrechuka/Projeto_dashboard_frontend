function efetuarLogin(){
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("Digitou: "+txtLogin+"/"+txtSenha);

    var msgBody = {
        racf : txtLogin,
        email : txtLogin,
        senha : txtSenha
    };


    var cabecalho = {
        method : "POST",
        body : JSON.stringify(msgBody),
        headers : {
            "Content-type":"application/json"

        }
    };

        fetch("http://localhost:8088/login", cabecalho).then(res => trataResposta(res));

}

function trataResposta(res){
    if (res.status == 200){
        res.json().then(objUsuario=>logarUsuario(objUsuario));

    }
    else if (res.status == 401){
        document.getElementById("msg").innerHTML = "Senha Invalida";

    }
    else if (res.status == 404){
        document.getElementById("msg").innerHTML = "Usuario nao encontrado";

    }
}
function logarUsuario(objUsuario){

    localStorage.setItem("userAlarme", JSON.stringify(objUsuario));
    // console.log("Usuario Logado");
    // console.log(objUsuario);
    window.location = "selecao.html"; // redireciona para a página de selecionar relatório

}