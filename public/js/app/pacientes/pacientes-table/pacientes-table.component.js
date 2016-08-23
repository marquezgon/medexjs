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
            styleUrls: ['pacientes-table.component.css']
        }), 
        __metadata('design:paramtypes', [pacientes_service_1.PacientesService])
    ], PacientesTableComponent);
    return PacientesTableComponent;
}());
exports.PacientesTableComponent = PacientesTableComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2llbnRlcy9wYWNpZW50ZXMtdGFibGUvcGFjaWVudGVzLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELGtDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBU3REO0lBSUksaUNBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRELGNBQVMsR0FBRyxFQUFFLENBQUM7SUFJZixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFRCxnREFBYyxHQUFkLFVBQWUsUUFBa0I7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFwQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUMvQyxDQUFDOzsrQkFBQTtJQWlCRiw4QkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksK0JBQXVCLDBCQWdCbkMsQ0FBQSIsImZpbGUiOiJwYWNpZW50ZXMvcGFjaWVudGVzLXRhYmxlL3BhY2llbnRlcy10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWNpZW50ZXNTZXJ2aWNlfSBmcm9tIFwiLi4vcGFjaWVudGVzLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFjaWVudGV9IGZyb20gXCIuLi9wYWNpZW50ZXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3BhY2llbnRlcy10YWJsZScsXG4gICAgdGVtcGxhdGVVcmw6ICdwYWNpZW50ZXMtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwYWNpZW50ZXMtdGFibGUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhY2llbnRlc1RhYmxlQ29tcG9uZW50IHtcblxuICAgIHBhY2llbnRlcyA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWNpZW50ZXNTZXJ2aWNlOiBQYWNpZW50ZXNTZXJ2aWNlKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYWNpZW50ZXMgPSB0aGlzLnBhY2llbnRlc1NlcnZpY2UuZ2V0UGFjaWVudGVzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0UGFjaWVudGUocGFjaWVudGU6IFBhY2llbnRlKSB7XG4gICAgICAgIHRoaXMucGFjaWVudGVzU2VydmljZS5zZWxlY3RlZFBhY2llbnRlKHBhY2llbnRlKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
