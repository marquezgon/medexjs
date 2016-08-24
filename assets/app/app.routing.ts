import {RouterModule, Routes} from "@angular/router";
import {PacientesComponent} from "./pacientes/pacientes.component";

const APP_ROUTES: Routes = [
    { path: 'pacientes', component: PacientesComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });