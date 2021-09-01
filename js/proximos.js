const septJSON = "data/pelis-sept.json";
const octJSON = "data/pelis-oct.json";
const novJSON = "data/pelis-nov.json";
const dicJSON = "data/pelis-dic.json";

$.getJSON(septJSON, function (response, status){
    if(status === "success"){

        for(const peli of response.pelisSept){
            $("#pelisSept").append(`<div class="pelisMes">
                                <img src="${peli.img}">
                                <h3>${peli.nombre}</h3>
                                <h4>Estreno: ${peli.estreno}</h4>
                            </div>`)
        }
    }
});

$.getJSON(octJSON, function (response, status){
    if(status === "success"){

        for(const peli of response.pelisOct){
            $("#pelisOct").append(`<div class="pelisMes">
                                <img src="${peli.img}">
                                <h3>${peli.nombre}</h3>
                                <h4>Estreno: ${peli.estreno}</h4>
                            </div>`)
        }
    }
});

$.getJSON(novJSON, function (response, status){
    if(status === "success"){

        for(const peli of response.pelisNov){
            $("#pelisNov").append(`<div class="pelisMes">
                                <img src="${peli.img}">
                                <h3>${peli.nombre}</h3>
                                <h4>Estreno: ${peli.estreno}</h4>
                            </div>`)
        }
    }
});

//Esta es la porción que va a enviar un objeto que contiene las peliculas de diciembre y que serán enviadas al presionar el btn ENVIAR

const URLGET   = "https://jsonplaceholder.typicode.com/posts"
//Declaramos la información a enviar
const infoPost =  { nombre: "Ana", profesion: "Programadora" }
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">POST</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").prepend(`<div>
Guardado:${respuesta.nombre}
</div>`);
        }  
    });
});



