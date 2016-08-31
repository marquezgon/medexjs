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
var pacientes_service_1 = require("../pacientes.service");
var highlight_row_directive_1 = require("../../highlight-row.directive");
var PacientesTableComponent = (function () {
    function PacientesTableComponent(pacientesService) {
        this.pacientesService = pacientesService;
        this.pacientes = [];
    }
    PacientesTableComponent.prototype.ngOnInit = function () {
        this.pacientes = this.pacientesService.getPacientes();
    };
    PacientesTableComponent.prototype.selectPaciente = function (paciente) {
        this.pacientesService.selectedPaciente(paciente);
    };
    PacientesTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pacientes-table',
            templateUrl: 'pacientes-table.component.html',
            styleUrls: ['pacientes-table.component.css'],
            directives: [highlight_row_directive_1.HighlightRow]
        }), 
        __metadata('design:paramtypes', [pacientes_service_1.PacientesService])
    ], PacientesTableComponent);
    return PacientesTableComponent;
}());
exports.PacientesTableComponent = PacientesTableComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2llbnRlcy9wYWNpZW50ZXMtdGFibGUvcGFjaWVudGVzLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELGtDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBRXRELHdDQUEyQiwrQkFBK0IsQ0FBQyxDQUFBO0FBUzNEO0lBSUksaUNBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRELGNBQVMsR0FBRyxFQUFFLENBQUM7SUFJZixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFRCxnREFBYyxHQUFkLFVBQWUsUUFBa0I7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFyQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUM1QyxVQUFVLEVBQUUsQ0FBQyxzQ0FBWSxDQUFDO1NBQzdCLENBQUM7OytCQUFBO0lBaUJGLDhCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSwrQkFBdUIsMEJBZ0JuQyxDQUFBIiwiZmlsZSI6InBhY2llbnRlcy9wYWNpZW50ZXMtdGFibGUvcGFjaWVudGVzLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhY2llbnRlc1NlcnZpY2V9IGZyb20gXCIuLi9wYWNpZW50ZXMuc2VydmljZVwiO1xuaW1wb3J0IHtQYWNpZW50ZX0gZnJvbSBcIi4uL3BhY2llbnRlc1wiO1xuaW1wb3J0IHtIaWdobGlnaHRSb3d9IGZyb20gXCIuLi8uLi9oaWdobGlnaHQtcm93LmRpcmVjdGl2ZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAncGFjaWVudGVzLXRhYmxlJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3BhY2llbnRlcy10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3BhY2llbnRlcy10YWJsZS5jb21wb25lbnQuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW0hpZ2hsaWdodFJvd11cbn0pXG5leHBvcnQgY2xhc3MgUGFjaWVudGVzVGFibGVDb21wb25lbnQge1xuXG4gICAgcGFjaWVudGVzID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhY2llbnRlc1NlcnZpY2U6IFBhY2llbnRlc1NlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhY2llbnRlcyA9IHRoaXMucGFjaWVudGVzU2VydmljZS5nZXRQYWNpZW50ZXMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3RQYWNpZW50ZShwYWNpZW50ZTogUGFjaWVudGUpIHtcbiAgICAgICAgdGhpcy5wYWNpZW50ZXNTZXJ2aWNlLnNlbGVjdGVkUGFjaWVudGUocGFjaWVudGUpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
