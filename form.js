getdata = () => { 
    const nombre_text  = document.getElementById("nombre").value
    const mensaje      = document.getElementById("mensaje").value
    const telefono     = document.getElementById("tell").value
    const email        = document.getElementById("email").value
    debuger 
    form = [nombre_text, mensaje, telefono, email]
    console.log(form)

    var fs = require('fs');
    fs.writeFileSync( "nuevo.txt", form, { encoding: 'utf8'});
    fs.close()
}





