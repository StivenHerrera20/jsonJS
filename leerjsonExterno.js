//Leer json de la forma moderna

//Promesas fetch() parametro es el recurso a leer
fetch(" https://api.escuelajs.co/api/v1/products")
  //Promesa donde se parsea el resultado del fetch
  .then((respuesta) => {
    return respuesta.json();
  })
  //accion a desarrollar con el archivo leido y parseado
  .then((respuesta) => {
    for (let index = 0; index < respuesta.length; index++) {
      const card = document.createElement("div");
      card.setAttribute("class", "card mt-3");
      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");
      cardBody.innerHTML =
        respuesta[index].id +
        "<br>" +
        respuesta[index].title +
        "<br>" +
        respuesta[index].price +
        "<br>" +
        respuesta[index].description;
      const capa = document.querySelector("#columna");
      capa.appendChild(card);
      card.appendChild(cardBody);
    }
    //console.log(respuesta);
  });
