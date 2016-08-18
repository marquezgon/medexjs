import { Component, Input } from '@angular/core';
import { Doctor } from './doctor';

@Component({
  selector: '<mi-doctor></mi-doctor>',
  template: `
    <h1>Bienvenido, {{doctor.nombre}}</h1>
  `
})
export class DoctorComponent {
  @Input() doctor: Doctor;
}
