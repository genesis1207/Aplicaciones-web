document.addEventListener('DOMContentLoaded', function () {
    const reportForm = document.getElementById('reportForm');
    const errorMessage = document.getElementById('error-message');

    reportForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const equipmentID = document.getElementById('equipmentID').value;
        const reportType = document.getElementById('reportType').value;
        const reportDescription = document.getElementById('reportDescription').value;

        // Validación básica: asegurarse de que el campo de ID del equipo no esté vacío y sea un número válido
        if (!equipmentID || isNaN(equipmentID)) {
            errorMessage.textContent = 'Por favor, ingrese un ID de equipo válido.';
            errorMessage.style.color = 'red';
            document.getElementById('equipmentID').classList.add('invalid-input');
        } else if (reportType === '') {
            errorMessage.textContent = 'Por favor, seleccione un tipo de reporte.';
            errorMessage.style.color = 'red';
            document.getElementById('reportType').classList.add('invalid-input');
        } else if (reportDescription.trim() === '') {
            errorMessage.textContent = 'Por favor, ingrese una descripción del reporte.';
            errorMessage.style.color = 'red';
            document.getElementById('reportDescription').classList.add('invalid-input');
        } else {
            // El formulario es válido. Puedes agregar aquí la lógica para generar el reporte o redirigir al usuario a una página de informes.
            errorMessage.textContent = 'Reporte generado con éxito.';
            errorMessage.style.color = 'green';

            // Limpiar los campos y las clases de estilo de invalidación
            document.getElementById('equipmentID').value = '';
            document.getElementById('reportType').value = '';
            document.getElementById('reportDescription').value = '';
            document.getElementById('equipmentID').classList.remove('invalid-input');
            document.getElementById('reportType').classList.remove('invalid-input');
            document.getElementById('reportDescription').classList.remove('invalid-input');
        }
    });

    // Escuchar eventos de cambio para quitar las clases de estilo de invalidación cuando los campos se completan correctamente
    document.getElementById('equipmentID').addEventListener('input', function () {
        if (document.getElementById('equipmentID').value) {
            document.getElementById('equipmentID').classList.remove('invalid-input');
        }
    });

    document.getElementById('reportType').addEventListener('change', function () {
        if (document.getElementById('reportType').value) {
            document.getElementById('reportType').classList.remove('invalid-input');
        }
    });

    document.getElementById('reportDescription').addEventListener('input', function () {
        if (document.getElementById('reportDescription').value.trim()) {
            document.getElementById('reportDescription').classList.remove('invalid-input');
        }
    });
});
