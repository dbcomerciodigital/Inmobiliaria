document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", async (e) => {
        e.preventDefault();

        const datos = {
            titulo: formulario.titulo.value,
            descripcion: formulario.descripcion.value,
            imagen: formulario.imagen.value,
            tipo: formulario.tipo.value,
            localidad: formulario.localidad.value,
            superficie: formulario.superficie.value,
            ambientes: formulario.ambientes.value,
            patio: formulario.patio.value,
            precio: formulario.precio.value,
        };

        try {
            const res = await fetch("http://localhost:3000/crear-alquiler", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(datos),
            });

            if (res.ok) {
              alert("Propiedad agregada correctamente!");
              formulario.reset();
              cargarPropiedades();
            }
            else alert("Ocurrió un error");
        } catch (error) {
            console.error("Error al agregar propiedad:", error);
        }
    });

    //acá se cargan los datos de las casas que agregue el admin
    async function cargarPropiedades() {
      const contenedor = document.getElementById("propiedades-dinamicas");
      try {
        const res = await fetch("http://localhost:3000/alquiler");
        const propiedades = await res.json();

        contenedor.innerHTML = "";
        propiedades.forEach(prop => {
          const tarjeta = document.createElement("div");
          tarjeta.classList.add("tarjeta-propiedad");
          tarjeta.innerHTML = `
            <img src="../publico/imagenes/alquiler/${prop.imagen}" alt="Imagen de propiedad" />
            <h3>${prop.titulo}</h3>
            <p>${prop.descripcion}</p>
            <p><strong>Precio:</strong> $${prop.precio}</p>
            <p><strong>Localidad:</strong> ${prop.localidad || ""}</p>
            <button onclick="eliminarPropiedad(${prop.id})">Eliminar</button>
          `;
          contenedor.appendChild(tarjeta);
        });
      } catch (e) {
        contenedor.innerHTML = "<p>Error al cargar propiedades.</p>";
        console.error(e);
      }
    }

    window.eliminarPropiedad = async function (id) {
        if (!confirm("¿Eliminar esta propiedad?")) return;

        try {
            const res= await fetch(`http://localhost:3000/eliminar-alquiler/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
              alert("Propiedad eliminada correctamente!");
              cargarPropiedades();
            }
            else alert("Ocurrió un error");
            
        } catch (error) {
            console.error("Error al eliminar propiedad:", error);
        }
    };

    cargarPropiedades();
});

