function get_data(){
    $.ajax({
        url: "http://localhost:8080/api/Client/all",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#get_resultados").empty();
            mostrarInformacion(respuesta);
        }
    });
}

function mostrarInformacion(items){
    let table = "<table>"
    table += "<thead>";
    table += "<tr>";
    table += "<td>"+"ID"+"</td>";
    table += "<td>"+"NAME"+"</td>";
    table += "<td>"+"EMAIL"+"</td>";
    table += "<td>"+"AGE"+"</td>";
    table += "<td>"+"BUTTON"+"</td>";
    table += "</tr>";
    table += "</thead>";
    for (i=0; i<items.length; i++){
        table += "<tr>";
        table += "<td>" + items[i].idClient+"</td>";
        table += "<td>" + items[i].name+"</td>";
        table += "<td>" + items[i].email+"</td>";
        table += "<td>" + items[i].age+"</td>";
        table += "<td> <button onclick= 'borrarElemento("+items[i].idClient+")' class='btn btn-outline-danger'>Borrar</button>";
        table += "</tr>";
    }
    table += "</table>";
    $("#get_resultados").append(table);
}

function post_data(){
    let mydata ={
        idClient: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    };
    let dataToSend = JSON.stringify(mydata);
    $.ajax({
        url: "http://localhost:8080/api/Client/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(respuesta){
            $("#get_resultados").empty();
            get_data();
        }
    });

}

function put_data(){
    let mydata ={
        idClient: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    };

    let dataToSend = JSON.stringify(mydata);
    $.ajax({
        url: "http://localhost:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(respuesta){
            console.log("Todo ok");
            get_data();
        },
    });
}

function borrarElemento(idElemento){
    let myData = {
        idClient: idElemento,
    };

    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://localhost:8080/api/Client/"+idElemento,
        type: "DELETE",
        contentType: "application/json",
        dataType: "JSON",
        success: function(respuesta){
            $("#get_resultados").empty();
            get_data();
        }
    });
}

function get_id_data(){
    let mydata = $("#id").val();
    $.ajax({
        url: "http://localhost:8080/api/Client/" + mydata,
        type: "GET",
        dataType: "JSON",
        success: function(respuesta){
            console.log(respuesta);
            $("#get_resultados").empty();
            mostrarInformacion(respuesta.items);
            console.log(respuesta.items)
        }
    });
}

//*______________________________________________________________________________________
function get_dato_bote(){
    $.ajax({
        url: "http://localhost:8080/api/Boat/all",
        type: "GET",
        dataType: "JSON",
        success: function(respuestas){
            console.log(respuestas);
            $("#get_resultado").empty();
            mostrarInfo(respuestas);
        }
    });
}

function mostrarInfo(items){
    let tabl = "<table>"
    tabl += "<thead>";
    tabl += "<tr>";
    tabl += "<td>"+"ID"+"</td>";
    tabl += "<td>"+"BRAND"+"</td>";
    tabl += "<td>"+"MODEL"+"</td>";
    tabl += "<td>"+"CATEGORY_ID"+"</td>";
    tabl += "<td>"+"NAME"+"</td>";
    tabl += "<td>"+"BUTTON"+"</td>";
    tabl += "</tr>";
    tabl += "</thead>";
    for (i=0; i<items.length; i++){
        tabl += "<tr>";
        tabl += "<td>" + items[i].id+"</td>";
        tabl += "<td>" + items[i].brand+"</td>";
        tabl += "<td>" + items[i].year+"</td>";
        tabl += "<td>" + items[i].category+"</td>";
        tabl += "<td>" + items[i].name+"</td>";
        tabl += "<td> <button onclick= 'borrar_elemento("+items[i].id+")' class='btn btn-outline-danger'>Borrar</button>";
        tabl += "</tr>";
    }
    tabl += "</table>";
    $("#get_resultado").append(tabl);
}
// funciona hasta alli
function post_dato_bote(){
    let mydatabote ={
        id: $("#idbarcos").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#namebarcos").val()
    };
    let dataToSend = JSON.stringify(mydatabote);
    $.ajax({
        url: "http://localhost:8080/api/Boat/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(respuestas){
            $("#get_resultado").empty();
            get_dato_bote();
        }
    });

}

function put_dato_bote(){
    let mydatabote ={
        id: $("#idbarcos").val(),
        brand: $("#brand").val(),
        model: $("#model").val(),
        category_id: $("#category_id").val(),
        name: $("#namebarcos").val()
    };

    let dataToSend = JSON.stringify(mydatabote);
    $.ajax({
        url: "http://localhost:8080/api/Boat/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(respuestas){
            console.log("Todo ok");
            get_dato_bote();
        },

    });


}

function borrar_elemento(idElementos){
    let myDatabotes = {
        id: idElementos,
    };

    let dataToSend = JSON.stringify(myDatabotes);
    $.ajax({
        url: "http://localhost:8080/api/Boat/all"+idElementos,
        type: "DELETE",
        contentType: "application/json",
        dataType: "JSON",
        success: function(respuestas){
            $("#get_resultado").empty();
            get_dato_bote();
        }
    });
}

function get_id_dato_bote(){
    let mydatabote = $("#idbarcos").val();
    $.ajax({
        url: "http://localhost:8080/api/Boat/" + mydatabote,
        type: "GET",
        dataType: "JSON",
        success: function(respuestas){
            console.log(respuestas);
            $("#get_resultado").empty();
            mostrarInfo(respuestas.items);
            console.log(respuestas.items)
        }
    });
}


//_________________________________________________________________________________
function get_data_mens(){
    $.ajax({
        url: "http://localhost:8080/api/Message/all/",
        type: "GET",
        dataType: "JSON",
        success: function(answer){
            console.log(answer);
            $("#get_results").empty();
            mostrar(answer);
        }
    });
}

function mostrar(items){
    let tab = "<table>"
    tab += "<thead>";
    tab += "<tr>";
    tab += "<td>"+"ID"+"</td>";
    tab += "<td>"+"MENSSAGE"+"</td>";
    tab += "<td>"+"BUTTON"+"</td>";
    tab += "</tr>";
    tab += "</thead>";
    for (i=0; i<items.length; i++){
        tab += "<tr>";
        tab += "<td>" + items[i].id+"</td>";
        tab += "<td>" + items[i].messagetext+"</td>";
        tab += "<td> <button onclick= 'borrar("+items[i].id+")' class='btn btn-outline-danger'>Borrar</button>";
        tab += "</tr>";
    }
    tab += "</table>";
    $("#get_results").append(tab);
}
// funciona hasta alli

function post_data_men(){
    let mydatamen = {
        idMessage: $("#idmen").val(),
        messagetext: $("#messagetext").val()
    };
    let dataToSend = JSON.stringify(mydatamen);
    $.ajax({
        url: "http://localhost:8080/api/Message/save",
        type: "POST",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(answer){
            $("#get_results").empty();
            get_data_mens();
        }
    });
}

function put_data_men(){
    let mydatamen ={
        id: $("#idmen").val(),
        messagetext: $("#messagetext").val()
    };
    let dataToSend = JSON.stringify(mydatamen);
    $.ajax({
        url: "http://localhost:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/json",
        datatype: "JSON",
        success: function(answer){
            $("#get_results").empty();
            get_data_mens();
        }
    });
}

function borrar(idElemento){
    let myDatamen = {
        id: idElemento,
    };

    let dataToSend = JSON.stringify(myDatamen);
    $.ajax({
        url: "http://localhost:8080/api/Message/"+idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/json",
        dataType: "JSON",
        success: function(answer){
            $("#get_results").empty();
            get_data_mens();
        }
    });
}

function get_id_data_men(){
    let mydatamen = $("#idmen").val();
    $.ajax({
        url: "http://localhost:8080/api/Message/" + mydatamen,
        type: "GET",
        dataType: "JSON",
        success: function(answer){
            console.log(answer);
            $("#get_results").empty();
            mostrar(answer.items);
            console.log(answer.items)
        }
    });
}