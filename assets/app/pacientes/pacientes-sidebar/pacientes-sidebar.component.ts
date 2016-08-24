import { Component, OnInit } from "@angular/core";
import {PacientesService} from "../pacientes.service";
import {Paciente} from "../pacientes";

@Component({
    moduleId: module.id,
    selector: 'pacientes-sidebar',
    templateUrl: 'pacientes-sidebar.component.html',
    styleUrls: ['pacientes-sidebar.component.css']
})
export class PacientesSidebarComponent implements OnInit {

    sPaciente: Paciente;

    constructor(private pacienteService: PacientesService) {

    }

    ngOnInit() {
        this.pacienteService.pacienteEmitter.subscribe(
            data => {
                this.sPaciente = data
            }
        )
    }
}