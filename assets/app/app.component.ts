import { Component } from '@angular/core';
import { Doctor } from './auth/doctor';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'my-app',
    template: `
        <my-header [user]="doctor"></my-header>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  doctor: Doctor = new Doctor('marquezgon', 'Gonzalo', 'Márquez');
}
