function hazConsulta(){
    var q = document.getElementById("consulta").value;
    
    var url = "index.php";

    $.ajax({
        type: "post",
        url: url,
        data: {consulta:q},

        sucess: function(datos){
            $("#mostrar").html(datos);
        }
    })
}
