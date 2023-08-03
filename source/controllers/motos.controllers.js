const Motos = require("../Model/Motos.js");

// Obtener todas las motos
exports.obtenerMotos = async (req, res) => {
  try {
    const motos = await Motos.find();
    res.json({
      status: "ok",
      motos,
    });
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener las motos" });
  }
};

// Obtener una moto por su ID
exports.obtenerMotoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const moto = await Motos.findById(id);
    if (moto) {
      res.json(moto);
    } else {
      res.status(404).json({ mensaje: "No se encontró la moto" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al obtener la moto" });
  }
};

// Crear una nueva moto
exports.crearMoto = async (req, res) => {
  // aqui es para agregar nuevas descripcionesdhjfkqwfuoqwhscfaksjfhoqwfqfchqofqwufhefhu
  const {imagen,modelo, nombre, descripcion, precio } = req.body;
  try {
    const moto = await Motos.create({
      imagen,
      modelo,
      nombre,
      descripcion,
      precio,
    });
    res.status(201).json(moto);
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al crear la moto" });
  }
};

// Actualizar una moto existente
exports.actualizarMoto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const moto = await Motos.findByIdAndUpdate(
      id,
      { nombre, descripcion },
      { new: true }
    );
    if (moto) {
      res.json(moto);
    } else {
      res.status(404).json({ mensaje: "No se encontró la moto" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al actualizar la moto" });
  }
};

// Eliminar una moto existente
exports.eliminarMoto = async (req, res) => {
  const { id } = req.params;
  try {
    const moto = await Motos.findByIdAndDelete(id);
    if (moto) {
      res.json({ mensaje: "Moto eliminada correctamente" });
    } else {
      res.status(404).json({ mensaje: "No se encontró la moto" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ mensaje: "Ocurrió un error al eliminar la moto" });
  }
};
  
