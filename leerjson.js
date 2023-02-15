//Leer json de la forma moderna

//Promesas fetch() parametro es el recurso a leer
fetch("adso.json")
  //Promesa donde se parsea el resultado del fetch
  .then((respuesta) => {
    return respuesta.json();
  })
  //accion a desarrollar con el archivo leido y parseado
  .then((respuesta) => {
    for (let index = 0; index < respuesta.length; index++) {
      const parrafo = document.createElement("p");
      parrafo.innerHTML =
        respuesta[index].nombre + " " + respuesta[index].apellidos + "<br>";
      const capa = document.querySelector("#columna");
      capa.appendChild(parrafo);
    }
    //console.log(respuesta);
  });
