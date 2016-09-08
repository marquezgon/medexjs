import {EventEmitter} from '@angular/core';
import {Paciente} from "./pacientes";
import {Consulta} from "../consultas/consulta";


export class PacientesService {
    pacienteEmitter = new EventEmitter();
    private consultas: Consulta[] = [
        {
            doctor: '1',
            paciente: '1',
            motivo: 'enfermo',
            fecha: new Date(),
            patologia_asociada: 'loco',
            antecedentes: '',
            peso: 67,
            talla: 'large',
            t_a: 'no se',
            temperatura: 89,
            frecuencia_cardiaca: 70,
            frecuencia_respiratoria: 99,
            glucosa: 110
        }
    ];
    private pacientes: Paciente[] = [
        {
            nombre: 'Gonzalo',
            apellidos: 'Marquez Cortes',
            fecha_nacimiento: new Date('03-24-1989'),
            sexo: 'M',
            tipo_sangre: 'O+',
            direccion: 'Tepeyac 4646',
            cp: 60201,
            municipio: 'Zapopan',
            estado: 'Jalisco'
        },
        {
            nombre: 'David',
            apellidos: 'Leon Cortes',
            fecha_nacimiento: new Date('08-15-1986'),
            sexo: 'M',
            tipo_sangre: 'O-',
            direccion: 'Ramon Corona 4',
            cp: 60201,
            municipio: 'Juanacatlan',
            estado: 'Jalisco'
        }
    ];

    getPacientes() {
        return this.pacientes;
    }

    selectedPaciente(paciente:Paciente) {
        this.pacienteEmitter.emit({'paciente':paciente, 'consultas': this.consultas});

    }

}
