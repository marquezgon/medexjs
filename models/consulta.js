var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    motivo: {type: String, required: true},
    patologia_asociada: {type: String},
    antecedentes: {type: String},
    peso: {type: Number},
    talla: {type: String},
    t_a: {type: String},
    temperatura: {type: Number},
    frecuencia_cardiaca: {type: Number},
    frecuencia_respiratoria: {type: Number},
    glucosa: {type: Number},
    fecha: {type:Date, default: Date.now},
    doctor: {type: Schema.Types.ObjectId, ref: 'Doctor'},
    paciente: {type: Schema.Types.ObjectId, ref: 'Paciente'}
});

module.exports = mongoose.model('Consulta', schema);
