document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("form-contacto");
    const respuesta = document.getElementById("respuesta");
  
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = formulario.nombre.value.trim();
      const email = formulario.email.value.trim();
      const mensaje = formulario.mensaje.value.trim();
  
      if (!nombre || !email || !mensaje) {
        respuesta.textContent = "Por favor, completá todos los campos.";
        respuesta.style.color = "red";
        return;
      }
  
      // Simulación de envío
      respuesta.textContent = "Gracias por tu mensaje, " + nombre + ". Te responderemos pronto.";
      respuesta.style.color = "green";
      formulario.reset();
    });
  });
  