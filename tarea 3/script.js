document.addEventListener("DOMContentLoaded", function () {
    const clienteForm = document.getElementById("clienteForm");

    clienteForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtener los valores de los campos
        const cedula = document.getElementById("cedula").value;
        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;
        const nacionalidad = document.getElementById("nacionalidad").value;
        const telefono = document.getElementById("telefono").value;
        const sexo = document.querySelector('input[name="sexo"]:checked').value;
        const email = document.getElementById("email").value;

        // Aquí puedes realizar acciones con los datos, como enviarlos a un servidor o mostrarlos en la página
        console.log("Cédula:", cedula);
        console.log("Nombre:", nombre);
        console.log("Apellidos:", apellidos);
        console.log("Fecha de Nacimiento:", fechaNacimiento);
        console.log("Nacionalidad:", nacionalidad);
        console.log("Teléfono:", telefono);
        console.log("Sexo:", sexo);
        console.log("Correo Electrónico:", email);

        // Limpiar el formulario después de envio de  datos
        clienteForm.reset();
    });
});
