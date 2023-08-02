const mongoose = require("mongoose");

/* Vamos a crear una función try-cath para la conexión */
const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.URI_DB);
    console.log("La base de data está OK");
  } catch (error) {
    console.log(error);
  }
};

/* Exportamos nuestra función para su utilización */
module.exports = {
  dbConnection,
};
