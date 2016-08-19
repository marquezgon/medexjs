import { Component, OnInit } from '@angular/core';
import {PacientesService} from "../pacientes.service";

@Component({
    moduleId: module.id,
    selector: 'pacientes-table',
    templateUrl: 'pacientes-table.component.html',
    styleUrls: ['pacientes-table.component.css'],
    providers: [PacientesService]
})
export class PacientesTableComponent {

    pacientes = [];

    constructor(private pacientesService: PacientesService) {

    }

    ngOnInit() {
        this.pacientes = this.pacientesService.getPacientes();
    }
}