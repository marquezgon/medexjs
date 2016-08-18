import { Component } from '@angular/core';
import { Doctor } from './auth/doctor';

@Component({
    selector: 'my-app',
    template: `
        <my-header [user]="doctor"></my-header>
        <div id="wrapper">
            <pacientes-sidebar></pacientes-sidebar>
            <pacientes-right-sidebar></pacientes-right-sidebar>
        </div>
    `
})
export class AppComponent {
  doctor: Doctor = new Doctor('marquezgon', 'Gonzalo', 'Márquez');
}
