var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    fecha_nacimiento: {type: Date, required: true},
    sexo: {type: String, required: true},
    tipo_sangre: {type: String, required: true},
    direccion: {type: String, required: true},
    cp: {type: Number},
    municipio: {type: String},
    estado: {type: String}
});

module.exports = mongoose.model('Paciente', schema);
