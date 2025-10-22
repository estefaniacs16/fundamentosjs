//Definir una funación de busqueda
let getUsuarioById = (id, callback) => {
    //Suponer que realiza una busqueda en base de Datos
    let usuario = {
        id, // == id : id
        nombre: "Valeria"
    };
    //Simular un error
    if (id === 20){
        //En el caso de error solo se invoca al call back con el mensaje de error
        callback(`El usuario con id ${id} no existe`)
    }else{
        //El primer parámetro del callback es el error, si todo esta correcto, se indica un null
        callback(null, usuario);
    }
};

// utilizar la funcion 
getUsuarioById(10, (err, usuario) => {
    if (err){
        return console.log(err);
    }

    console.log(usuario);
});