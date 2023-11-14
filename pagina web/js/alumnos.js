

const alumnos = [
    {
        "apellido": "Rodriguez",
        "nombre": "María Cecilia",
        "titulo":"Diseñadora Multimedial",
        "descripcion":"Me especializo en Desarrollo...",
        "cv": "url al cv",
        "correo":"mciannello@janer.esc.edu.ar",
        "imagen": "messi.jpg"
        
    },
    {
        "apellido": "Iannello",
        "nombre": "María Cecilia",
        "titulo":"Diseñadora Multimedial",
        "descripcion":"Me especializo en Desarrollo...",
        "cv": "url al cv",
        "correo":"mciannello@janer.esc.edu.ar",
        "imagen": "messi.jpg"
        
    },
    {
        "apellido": "Iannello",
        "nombre": "María Cecilia",
        "titulo":"Diseñadora Multimedial",
        "descripcion":"Me especializo en Desarrollo...",
        "cv": "url al cv",
        "correo":"mciannello@janer.esc.edu.ar",
        "imagen": "messi.jpg"
        
    }
]




// console.log(alumnos);
var tarjeta= document.getElementById("tarjeta")
// var apellido= document.getElementById("titulo");

alumnos.forEach(alumno => {
    console.log (alumno)
    tarjeta.innerHTML= "<div class='card mb-3' style='max-width: 540px;'>"+
   " <div class='row g-0'>"+
      "<div class='col-md-4'>"+
        "<img src='./img/"+alumno.imagen+"' class='img-fluid rounded-start' alt='Foto'>"+
      "</div>"+
      "<div class='col-md-8'>"+
        "<div class='card-body'>"+
          "<h5 class='card-title' id='titulo'>"+alumno.apellido+"  "+alumno.nombre+"</h5>"+
          "<h6 class='card-subtitle>"+alumno.titulo+"</h6>"+
         " <p class='card-text'>"+alumno.descripcion+"</p>"+
          "<div class='card-body'>"+
           " <a href='"+alumno.cv+"'' class='card-link'>CV</a>"+
           " <a href='"+alumno.correo+"' class='card-link'>Correo</a>"+
         " </div>"+
       " </div>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>"
  
    // apellido.innerHTML= alumno.apellido + "  "+ alumno.nombre
    
});