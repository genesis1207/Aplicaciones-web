document.addEventListener('DOMContentLoaded', function () {
    const equipmentForm = document.getElementById('equipmentForm');
    const errorMessage = document.getElementById('error-message');

    equipmentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const serialNumber = document.getElementById('serialNumber');
        const description = document.getElementById('description');

        // Validación básica: asegurarse de que los campos obligatorios no estén vacíos
        if (!name.value || !serialNumber.value || !description.value) {
            errorMessage.textContent = 'Por favor, complete todos los campos obligatorios.';
            errorMessage.style.color = 'red';

            // Marcar campos vacíos como inválidos
            if (!name.value) {
                name.classList.add('invalid-input');
            } else {
                name.classList.remove('invalid-input');
            }

            if (!serialNumber.value) {
                serialNumber.classList.add('invalid-input');
            } else {
                serialNumber.classList.remove('invalid-input');
            }

            if (!description.value) {
                description.classList.add('invalid-input');
            } else {
                description.classList.remove('invalid-input');
            }
        } else {
            // El formulario es válido. Puedes agregar aquí la lógica para enviar los datos a tu sistema de gestión.
            errorMessage.textContent = 'Equipo agregado con éxito.';
            errorMessage.style.color = 'green';

            // Limpiar los campos y las clases de estilo de invalidación
            name.value = '';
            serialNumber.value = '';
            description.value = '';
            name.classList.remove('invalid-input');
            serialNumber.classList.remove('invalid-input');
            description.classList.remove('invalid-input');
        }
    });

    // Escuchar eventos de cambio para quitar las clases de estilo de invalidación cuando los campos se completan
    name.addEventListener('input', function () {
        if (name.value) {
            name.classList.remove('invalid-input');
        }
    });

    serialNumber.addEventListener('input', function () {
        if (serialNumber.value) {
            serialNumber.classList.remove('invalid-input');
        }
    });

    description.addEventListener('input', function () {
        if (description.value) {
            description.classList.remove('invalid-input');
        }
    });
});
