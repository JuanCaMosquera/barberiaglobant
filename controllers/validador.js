let boton=document.getElementById("botonagenda");

let cajaNombres = document.getElementById("usuario")
let cajaCorreo = document.getElementById("correo")
let cajaTelefono = document.getElementById("telefono")
let cajaFecha = document.getElementById("fecha")
let cajaHora = document.getElementById("hora")

//quiero programar el evento de hacer clic en el boton
boton.addEventListener("click",function(infoEvento){
    infoEvento.preventDefault()

    let usuario = cajaNombres. value
    let correo = cajaCorreo. value
    let telefono = cajaTelefono. value
    let fecha = cajaFecha. value
    let hora = cajaHora. value

    let errores=[]

    if (!usuario){
      errores.push("El nombre es obligatorio")
      cajaNombres.classList.add("is-invalid")
    }
    if (!correo) {
      errores.push("El correo es obligatorio")
      cajaCorreo.classList.add("is-invalid")
    }
    if (!telefono) {
      errores.push("El telefono es obligatorio")
      cajaTelefono.classList.add("is-invalid")
    }
    if (!fecha) {
      errores.push("La fecha es obligatoria")
      cajaFecha.classList.add("is-invalid")
    }
    
    if (hora=='seleccione una hora') {
      errores.push("La hora es obligatoria")
      cajaHora.classList.add("is-invalid")
    }
    console.log(usuario,correo,telefono,fecha,hora)
    /*Swal.fire(
        'Te esperamos',
        'Su cita ha sido agendada',
        'success'
      )*/
    
})