import { Component } from '@angular/core';
import { DoctorComponent } from './auth/doctor.component';
import { HeaderComponent } from './header.component';
import { Doctor } from './auth/doctor';
import {PacientesSidebarComponent} from "./pacientes/pacientes-sidebar.component";
import {PacientesRightSidebarComponent} from "./pacientes/pacientes-right-sidebar.component";

@Component({
    selector: 'my-app',
    template: `
        <my-header [user]="doctor"></my-header>
        <div id="wrapper">
            <pacientes-sidebar></pacientes-sidebar>
            <pacientes-right-sidebar></pacientes-right-sidebar>
        </div>
    `,
    directives: [DoctorComponent, HeaderComponent, PacientesSidebarComponent, PacientesRightSidebarComponent]
})
export class AppComponent {
  doctor: Doctor = new Doctor('marquezgon', 'Gonzalo', 'Márquez');
}
