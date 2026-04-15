// Importar herramientas necesarias
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

// Crear servidor
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("publico"));

// Conexión a la base de datos
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "inmobiliaria",
});

conexion.connect((err) => {
    if (err) {
        console.error("Error al conectar con MySQL:", err);
        return;
    }
    console.log("Conectado a la base de datos MySQL");
});


// Rutas -----------------------------


// 1. Listar propiedades de ventas
app.get("/ventas", (req, res) => {
    const consulta = "SELECT * FROM ventas";
    conexion.query(consulta, (err, resultados) => {
        if (err) {
            res.status(500).json({ error: "Error en la base de datos" });
            return;
        }
        res.json(resultados);
    });
});

// 2. Listar propiedades de alquiler
app.get("/alquiler", (req, res) => {
    const consulta = "SELECT * FROM alquiler";
    conexion.query(consulta, (err, resultados) => {
        if (err) {
            console.error("Error en la consulta:", err);
            res.status(500).json({ error: "Error en la base de datos" });
            return;
        }
        res.json(resultados);
    });
});

app.post("/crear-venta", (req, res) => {
  const datos = req.body;
  console.log("Datos recibidos", datos);

  const sql = "INSERT INTO ventas (`titulo`, `descripcion`, `imagen`, `tipo`, `localidad`, `superficie`, `ambientes`, `patio`, `precio`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const { titulo, descripcion, imagen, tipo, localidad, superficie, ambientes, patio, precio } = datos;
  conexion.query(sql, [titulo, descripcion, imagen, tipo, localidad, superficie, ambientes, patio, precio], (err, resultado) => {
      if (err) {
        console.error("Error en la consulta:", err);
        res.status(500).json({ error: "Error en la base de datos" });
        return;
      }

      console.log("Propiedad agregada correctamente");
      res.status(200).json({ mensaje: "Propiedad agregada correctamente" });
  });
});

app.post("/crear-alquiler", (req, res) => {
  const datos = req.body;
  console.log("Datos recibidos", datos);

  const sql = "INSERT INTO alquiler (`titulo`, `descripcion`, `imagen`, `tipo`, `localidad`, `superficie`, `ambientes`, `patio`, `precio`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const { titulo, descripcion, imagen, tipo, localidad, superficie, ambientes, patio, precio } = datos;
  conexion.query(sql, [titulo, descripcion, imagen, tipo, localidad, superficie, ambientes, patio, precio], (err, resultado) => {
      if (err) {
        console.error("Error en la consulta:", err);
        res.status(500).json({ error: "Error en la base de datos" });
        return;
      }

      console.log("Propiedad agregada correctamente");
      res.status(200).json({ mensaje: "Propiedad agregada correctamente" });
  });
});

app.delete("/eliminar-venta/:id", (req, res) => {
  const id = req.params.id;
  console.log("Id recibido", id);

  const sql = "DELETE FROM ventas WHERE id = ?";
  conexion.query(sql, [id], (err, resultado) => {
      if (err) {
        console.error("Error en la consulta:", err);
        res.status(500).json({ error: "Error en la base de datos" });
        return;
      }

      console.log("Propiedad eliminada correctamente");
      res.status(200).json({ mensaje: "Propiedad eliminada correctamente" });
  });
});

app.delete("/eliminar-alquiler/:id", (req, res) => {
  const id = req.params.id;
  console.log("Id recibido", id);

  const sql = "DELETE FROM alquiler WHERE id = ?";
  conexion.query(sql, [id], (err, resultado) => {
      if (err) {
        console.error("Error en la consulta:", err);
        res.status(500).json({ error: "Error en la base de datos" });
        return;
      }

      console.log("Propiedad eliminada correctamente");
      res.status(200).json({ mensaje: "Propiedad eliminada correctamente" });
  });
});

// -----------------------------------

// Encender servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
