import { Component, OnInit } from '@angular/core';
import {PacientesService} from "../pacientes.service";
import {Paciente} from "../pacientes";
import {HighlightRow} from "../../highlight-row.directive";

@Component({
    moduleId: module.id,
    selector: 'pacientes-table',
    templateUrl: 'pacientes-table.component.html',
    styleUrls: ['pacientes-table.component.css'],
    directives: [HighlightRow]
})
export class PacientesTableComponent {

    pacientes = [];

    constructor(private pacientesService: PacientesService) {

    }

    ngOnInit() {
        this.pacientes = this.pacientesService.getPacientes();
    }

    selectPaciente(paciente: Paciente) {
        this.pacientesService.selectedPaciente(paciente);
    }

}