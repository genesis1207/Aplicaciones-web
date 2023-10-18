document.addEventListener("DOMContentLoaded", function() {
    const equipmentTable = document.getElementById("equipmentTable");
    const searchInput = document.getElementById("searchInput");
    const tbody = equipmentTable.querySelector("tbody");

    // Ejemplo de datos de equipos (puedes cargarlos desde una API o base de datos)
    const equipos = [
        { nombre: "Equipo 1", serial: "12345", estado: "Disponible", ubicacion: "Oficina A" },
        { nombre: "Equipo 2", serial: "67890", estado: "En Reparación", ubicacion: "Taller" },
        // Agregar más datos de equipos aquí
    ];

    function renderTable(equipos) {
        tbody.innerHTML = "";
        equipos.forEach(equipo => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><a href="detalle_equipo.html">${equipo.nombre}</a></td>
                <td>${equipo.serial}</td>
                <td>${equipo.estado}</td>
                <td>${equipo.ubicacion}</td>
            `;

            // Agregar un evento click para redirigir a la página de detalles
            row.querySelector("a").addEventListener("click", function (event) {
                event.preventDefault();
                // Redirigir a la página de detalles con parámetro del equipo seleccionado
                const equipoNombre = equipo.nombre;
                window.location.href = `detalle_equipo.html?equipo=${equipoNombre}`;
            });

            tbody.appendChild(row);
        });
    }

    renderTable(equipos);

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredEquipos = equipos.filter(equipo =>
            equipo.nombre.toLowerCase().includes(searchTerm) ||
            equipo.serial.toLowerCase().includes(searchTerm) ||
            equipo.estado.toLowerCase().includes(searchTerm) ||
            equipo.ubicacion.toLowerCase().includes(searchTerm)
        );
        renderTable(filteredEquipos);
    });
});
