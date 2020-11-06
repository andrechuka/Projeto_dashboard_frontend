
function logout(){
    localStorage.removeItem("userAlarme");
    window.location = "index.html";

}

function verificaLogin(){
    var user = localStorage.getItem("userAlarme");
        if (!user){
            window.location="index.html";
        }
}




function gerarRelatorio(){

var txtDataInicio = document.getElementById("txtDataInicio").value;
var txtDataFim = document.getElementById("txtDataFim").value;

var msgBody = {
dataInicio : txtDataInicio,
dataFim : txtDataFim
};

var cabecalho={
method : "POST",
body : JSON.stringify(msgBody),
headers : {
    "Content-Type":"application/json"

        }

    };

    fetch("http://localhost:8088/eventos/intervalo", cabecalho)
    .then(res => res.json ())
    .then(lista => preencherRelatorio(lista));
}




    function preencherRelatorio(lista){
        var txtRelatorio = `<table id="tabelaRelatorio" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>Data</th>
                <th>Hostname</th>
                <th>IP</th>
                <th>Alarme</th>
            </tr>
        </thead>
        <tbody>`; ;

        for (i=0; i < lista.length; i++){
            var evento = lista[i];  
           txtRelatorio += ` <tr>
                           <td>${evento.data}</td> 
                           <td>${evento.equipamento.hostname} </td>
                           <td> ${evento.equipamento.ip} </td>
                            <td> ${evento.alarme.nome} </td>
                            </tr>`; 


        }
        txtRelatorio += `</tbody> </table>`;
        document.getElementById("relatorio").innerHTML = txtRelatorio;
        $('#tabelaRelatorio').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ]
        });

    }

