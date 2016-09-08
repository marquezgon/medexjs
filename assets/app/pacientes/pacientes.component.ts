import { Component, OnInit } from "@angular/core";
import {PacientesService} from "./pacientes.service";

@Component({
    moduleId: module.id,
    selector: 'medex-pacientes',
    templateUrl: 'pacientes.component.html',
    styleUrls: ['pacientes.component.css'],
    providers: [PacientesService]
})
export class PacientesComponent implements OnInit {

    ngOnInit() {

    }
}