document.addEventListener("DOMContentLoaded", function() {
    const equipmentDetails = document.getElementById("equipmentDetails");
    const acquisitionDate = document.getElementById("acquisitionDate");
    const specs = document.getElementById("specs");
    const maintenanceHistory = document.getElementById("maintenanceHistory");
    const location = document.getElementById("location");

    // Ejemplo de datos de un equipo específico
    const equipo = {
        nombre: "Equipo 1",
        fechaAdquisicion: "01/01/2023",
        especificaciones: "Procesador: Intel i7, RAM: 16GB, Almacenamiento: 512GB SSD",
        historialMantenimiento: "Mantenimiento regular programado",
        ubicacion: "Oficina A",
    };

    // Rellenar los detalles del equipo con los datos
    equipmentDetails.querySelector("h2").textContent = equipo.nombre;
    acquisitionDate.textContent = equipo.fechaAdquisicion;
    specs.textContent = equipo.especificaciones;
    maintenanceHistory.textContent = equipo.historialMantenimiento;
    location.textContent = equipo.ubicacion;
});
