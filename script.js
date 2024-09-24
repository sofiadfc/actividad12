const star = document.getElementByClassName("star"); //este class name no lo enconttre en el html// 

// const range = 'https://nataliasotelo.github.io/act-estrellas/estrellas.json'; 
const nu
vgnaRreb

document.addEventListener("DOMContentLoaded", function() {

    const URL = 'https://nataliasotelo.github.io/act-estrellas/estrellas.json';
    let getJSONData = URL.then(function(resultado) {
        if (resultado.status === 'ok') {
            console.log(resultado.data);
            calificaciones(resultado.data); 
        } else {
            console.error("Error al obtener los datos:", resultado.status);
        }
    }).catch(function(error) {
        console.error("Error en la solicitud:", error);
    });
});

function calificaciones(array) {
    let listado = document.getElementById("calificacion");
    listado.innerHTML = "";
    array.forEach((element) => {
        listado.innerHTML += `
            <div class=
                ${element.name}
                ${element.company}
                ${element.numberrange}
            </div>
        `;
    });
}