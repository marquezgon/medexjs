import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {PacientesSidebarComponent} from "./pacientes/pacientes-sidebar.component";
import {PacientesRightSidebarComponent} from "./pacientes/pacientes-right-sidebar.component";
import {HeaderComponent} from "./header.component";

@NgModule({
    declarations: [AppComponent, PacientesSidebarComponent, PacientesRightSidebarComponent, HeaderComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}