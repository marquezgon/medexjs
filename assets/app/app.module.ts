import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {PacientesSidebarComponent} from "./pacientes/pacientes-sidebar/pacientes-sidebar.component";
import {PacientesRightSidebarComponent} from "./pacientes/pacientes-right-sidebar/pacientes-right-sidebar.component";
import {HeaderComponent} from "./header.component";
import {PacientesTableComponent} from "./pacientes/pacientes-table/pacientes-table.component";
import {PacientesService} from "./pacientes/pacientes.service";
import {PacientesComponent} from "./pacientes/pacientes.component";


@NgModule({
    declarations: [AppComponent, PacientesSidebarComponent, PacientesRightSidebarComponent, HeaderComponent, PacientesTableComponent, PacientesComponent],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent],
    providers: [PacientesService]
})
export class AppModule {

}