import {RouterModule, Routes} from "@angular/router";
import {PacientesComponent} from "./pacientes/pacientes.component";

const APP_ROUTES: Routes = [
    { path: 'pacientes', component: PacientesComponent },
    { path: '', redirectTo: '/pacientes', pathMatch: 'full'},
];

export const routing = RouterModule.forRoot(APP_ROUTES);