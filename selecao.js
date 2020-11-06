function carregaInfo(){
    var objUser = localStorage.getItem("userAlarme");
    if (!objUser){
        window.location = "index.html";
   }
   var usuario = JSON.parse(objUser);
   document.getElementById("fotoUser").innerHTML = `<img src= "${usuario.linkfoto}" width ="100%"></img>`;
   document.getElementById("infoUser").innerHTML = `<strong> Nome : </strong> ${usuario.nome} <br>
                                                    <strong> Email : </strong> ${usuario.email} <br>           
                                                    <strong> Racf : </strong> ${usuario.racf} <br>
                                                    <button type = "button" class="btn btn-primary" onclick="logout()">Logout</button>
                                                    `;   

}

    function logout(){
        localStorage.removeItem("userAlarme");
        window.location = "index.html";
    }