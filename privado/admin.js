document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    const tipo = formulario.dataset.tipo;
    const lista = document.getElementById("lista-propiedades");
  
    formulario.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const datos = {
        titulo: formulario.titulo.value,
        descripcion: formulario.descripcion.value,
        imagen: formulario.imagen.value,
        tipo: tipo,
        localidad: formulario.localidad.value,
        superficie: formulario.superficie.value,
        ambientes: formulario.ambientes.value,
        patio: formulario.patio.value,
        precio: formulario.precio.value
      };
  
      try {
        const res = await fetch("http://localhost:3000/propiedades", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos)
        });
  
        const resultado = await res.json();
        alert("Propiedad agregada con ID: " + resultado.id);
        formulario.reset();
        cargarPropiedades();
      } catch (error) {
        console.error("Error al agregar propiedad:", error);
      }
    });
  

    //acá se cargan los datos de las casas que agregue el admin
    async function cargarPropiedades() {
      try {
        const res = await fetch("http://localhost:3000/propiedades");
        const propiedades = await res.json();
        const filtradas = propiedades.filter(p => p.tipo === tipo);
  
        lista.innerHTML = "";
        filtradas.forEach(p => {
          const item = document.createElement("div");
          item.classList.add("tarjeta");
          item.innerHTML = `
            <p><strong>${p.titulo}</strong> - $${p.precio}</p>
            <button onclick="eliminarPropiedad(${p.id})">Eliminar</button>
          `;
          lista.appendChild(item);
        });
      } catch (error) {
        console.error("Error al cargar propiedades:", error);
      }
    }
  
    window.eliminarPropiedad = async function(id) {
      if (!confirm("¿Eliminar esta propiedad?")) return;
  
      try {
        await fetch(`http://localhost:3000/propiedades/${id}`, {
          method: "DELETE"
        });
        alert("Propiedad eliminada");
        cargarPropiedades();
      } catch (error) {
        console.error("Error al eliminar propiedad:", error);
      }
    };
  
    cargarPropiedades();
  });
  