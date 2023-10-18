
        function validar() { 
            nombre = document.getElementById("nombre").value;
            apellido = document.getElementById("apellido").value;  
            telefono = document.getElementById("telefono").value;
            pass1 = document.getElementById('pass1');
            pass2 = document.getElementById('pass2');

            if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){ 
                alert("El campo de nombres no puede estar vacío o valor no valido"); 
                return false; 
            }


            else if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)){ 
                alert("El campo apellidos no puede estar vacío o valor no valido"); 
                return false; 
            }

            else if( isNaN(telefono) || telefono.length == 0 ) {  
                alert("El telefono tiene que ser numérico o esta vacio"); 
                return false; 
            }

            else if (pass1.value != pass2.value) {
                alert("Las contraseñas no coinciden"); 
                return false;
             }

            return true;
        } 
