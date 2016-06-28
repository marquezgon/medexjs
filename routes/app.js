var express = require('express');
var router = express.Router();
var Doctor = require('../models/doctor');

router.get('/', function (req, res, next) {
  var doctor = new Doctor({
    nombre: 'Gonzalo',
    apellidos: 'Marquez Cortes',
  });
  doctor.save();
  res.render('index');
});

module.exports = router;
