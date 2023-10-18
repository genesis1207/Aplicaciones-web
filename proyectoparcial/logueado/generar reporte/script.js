document.addEventListener('DOMContentLoaded', function () {
    const reportForm = document.getElementById('reportForm');
    const errorMessage = document.getElementById('error-message');
    const reportList = document.getElementById('reportList'); // Obtener la lista de reportes

    reportForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const equipmentID = document.getElementById('equipmentID').value;
        const reportType = document.getElementById('reportType').value;
        const reportDescription = document.getElementById('reportDescription').value;

        // Validación básica: asegurarse de que los campos no estén vacíos
        if (!equipmentID || reportType === '' || reportDescription.trim() === '') {
            errorMessage.textContent = 'Por favor, complete todos los campos del formulario.';
            errorMessage.style.color = 'red';
        } else {
            // El formulario es válido. Agregar el reporte a la lista de reportes generados.
            const reportItem = document.createElement('li');
            reportItem.innerHTML = `<strong>ID del Equipo:</strong> ${equipmentID}, <strong>Tipo de Reporte:</strong> ${reportType}, <strong>Descripción:</strong> ${reportDescription}`;
            reportList.appendChild(reportItem);

            // Limpiar los campos y las clases de estilo de invalidación
            document.getElementById('equipmentID').value = '';
            document.getElementById('reportType').value = '';
            document.getElementById('reportDescription').value = '';

            // Limpiar el mensaje de error
            errorMessage.textContent = '';
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
