
///////jQuery//////////////////////
$( document ).ready( function() {
  var url = "../recursos/data.json";
  var data = {};
$.getJSON(url, data,
    function (data) {
        var template = '';
        data.forEach(element => {
            template += `
            <div class="card card border-info mb-3">
              <img class="card-img-top" src="${element.img}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <h6 class="card-text">Fecha de Aparición: ${element.aparicion}</h6>
                <h6 class="card-text">Casa: ${element.casa}</h6>
              </div>
            </div>
            `
            console.log(element.nombre)

         });  
         $("#api").append(template);     
    }    
);

 });
