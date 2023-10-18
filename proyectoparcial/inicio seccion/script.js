document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const errorMessage = document.getElementById('error-message');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    userForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (password.value !== confirmPassword.value) {
            errorMessage.textContent = 'Las contraseñas no coinciden';
        } else {
            // Aquí puedes agregar código para enviar el formulario o realizar otras acciones.
            errorMessage.textContent = ''; // Limpiar el mensaje de error si es válido.
        }
    });
});
