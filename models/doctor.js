var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    usuario: {type: String, required: true, unique: true},
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Doctor', schema);
