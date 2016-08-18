"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var doctor_component_1 = require('./auth/doctor.component');
var header_component_1 = require('./header.component');
var doctor_1 = require('./auth/doctor');
var pacientes_sidebar_component_1 = require("./pacientes/pacientes-sidebar.component");
var pacientes_right_sidebar_component_1 = require("./pacientes/pacientes-right-sidebar.component");
var AppComponent = (function () {
    function AppComponent() {
        this.doctor = new doctor_1.Doctor('marquezgon', 'Gonzalo', 'Márquez');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <my-header [user]=\"doctor\"></my-header>\n        <div id=\"wrapper\">\n            <pacientes-sidebar></pacientes-sidebar>\n            <pacientes-right-sidebar></pacientes-right-sidebar>\n        </div>\n    ",
            directives: [doctor_component_1.DoctorComponent, header_component_1.HeaderComponent, pacientes_sidebar_component_1.PacientesSidebarComponent, pacientes_right_sidebar_component_1.PacientesRightSidebarComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxpQ0FBZ0MseUJBQXlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCx1QkFBdUIsZUFBZSxDQUFDLENBQUE7QUFDdkMsNENBQXdDLHlDQUF5QyxDQUFDLENBQUE7QUFDbEYsa0RBQTZDLCtDQUErQyxDQUFDLENBQUE7QUFhN0Y7SUFBQTtRQUNFLFdBQU0sR0FBVyxJQUFJLGVBQU0sQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFiRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsK05BTVQ7WUFDRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBZSxFQUFFLGtDQUFlLEVBQUUsdURBQXlCLEVBQUUsa0VBQThCLENBQUM7U0FDNUcsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb2N0b3JDb21wb25lbnQgfSBmcm9tICcuL2F1dGgvZG9jdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9jdG9yIH0gZnJvbSAnLi9hdXRoL2RvY3Rvcic7XG5pbXBvcnQge1BhY2llbnRlc1NpZGViYXJDb21wb25lbnR9IGZyb20gXCIuL3BhY2llbnRlcy9wYWNpZW50ZXMtc2lkZWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7UGFjaWVudGVzUmlnaHRTaWRlYmFyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWNpZW50ZXMvcGFjaWVudGVzLXJpZ2h0LXNpZGViYXIuY29tcG9uZW50XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bXktaGVhZGVyIFt1c2VyXT1cImRvY3RvclwiPjwvbXktaGVhZGVyPlxuICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPHBhY2llbnRlcy1zaWRlYmFyPjwvcGFjaWVudGVzLXNpZGViYXI+XG4gICAgICAgICAgICA8cGFjaWVudGVzLXJpZ2h0LXNpZGViYXI+PC9wYWNpZW50ZXMtcmlnaHQtc2lkZWJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbRG9jdG9yQ29tcG9uZW50LCBIZWFkZXJDb21wb25lbnQsIFBhY2llbnRlc1NpZGViYXJDb21wb25lbnQsIFBhY2llbnRlc1JpZ2h0U2lkZWJhckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgZG9jdG9yOiBEb2N0b3IgPSBuZXcgRG9jdG9yKCdtYXJxdWV6Z29uJywgJ0dvbnphbG8nLCAnTcOhcnF1ZXonKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
