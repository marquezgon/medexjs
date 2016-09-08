import {EventEmitter} from "@angular/core";
import { Consulta } from './consulta';

export class ConsultaService {
    private consultaEmitter = new EventEmitter<Consulta>();
    public consultas: Consulta[] = [
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
}