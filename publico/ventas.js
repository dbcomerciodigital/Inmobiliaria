document.addEventListener("DOMContentLoaded", async () => {
  const contenedor = document.getElementById("propiedades-dinamicas");
  try {
    const res = await fetch("http://localhost:3000/ventas");
    const propiedades = await res.json();

    contenedor.innerHTML = "";
    propiedades.forEach(prop => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta");
      tarjeta.innerHTML = `
        <img src="imagenes/ventas/${prop.imagen}" alt="Imagen de propiedad" />
        <h3>${prop.titulo}</h3>
        <p>${prop.descripcion}</p>
        <p><strong>Precio:</strong> $${prop.precio}</p>
        <p><strong>Localidad:</strong> ${prop.localidad || ""}</p>
      `;
      contenedor.appendChild(tarjeta);
    });
  } catch (e) {
    contenedor.innerHTML = "<p>Error al cargar propiedades.</p>";
    console.error(e);
  }
});
