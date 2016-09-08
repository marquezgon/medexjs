import { Component, OnInit } from "@angular/core";
import {PacientesService} from "../pacientes.service";
import {Consulta} from "../../consultas/consulta";

@Component({
    moduleId: module.id,
    selector: 'pacientes-right-sidebar',
    templateUrl: 'pacientes-right-sidebar.component.html',
    styleUrls: ['pacientes-right-sidebar.component.css']
})
export class PacientesRightSidebarComponent implements OnInit {

    consultas: Consulta[];

    constructor(private pacienteService: PacientesService) {

    }

    ngOnInit() {
        this.pacienteService.pacienteEmitter.subscribe(
            data => {
                this.consultas = data.consultas
            }
        )
    }
}