
var json = {
    "alumnos": [
    {
        "apellido": "Iannello",
        "nombre": "María Cecilia",
        "titulo":"Diseñadora Multimedial",
        "cv": "url al cv",
        "correo":"mciannello@janer.esc.edu.ar",
        "imagen": "iannello_perfil.jpg"
        
    },
    {
        "apellido": "Iannello",
        "nombre": "María Cecilia",
        "titulo":"Diseñadora Multimedial",
        "cv": "url al cv",
        "correo":"mciannello@janer.esc.edu.ar",
        "imagen": "iannello_perfil.jpg"
        
    }
]
    
}

var arr = json.alumnos
    .map(x => x.apellido);


console.log(arr);