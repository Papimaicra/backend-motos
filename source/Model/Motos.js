const {Schema , model} = require("mongoose");

const motosSchema = new Schema({
    modelo: String,
    nombre: String,
    descripcion:{
        type: String,
        require: true,
    },
    precio: Number,
    imgurl: String
    /* aqui se ocupa para cambiar la descripcion */ 
});

module.exports = model("Motos", motosSchema);
