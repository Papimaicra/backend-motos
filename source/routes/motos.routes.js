const express = require("express");
const router = express.Router();
const motosController = require("../controllers/motos.controllers");

// Ruta para obtener todas las motos
router.get("/", motosController.obtenerMotos);

// Ruta para obtener una moto por su ID
router.get("/:id", motosController.obtenerMotoPorId);

// Ruta para crear una nueva moto
router.post("/", motosController.crearMoto);

// Ruta para actualizar una moto por su ID
router.put("/:id", motosController.actualizarMoto);

// Ruta para eliminar una moto por su ID
router.delete("/:id", motosController.eliminarMoto);

module.exports = router; 