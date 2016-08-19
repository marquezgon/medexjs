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
    PacientesTableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pacientes-table',
            templateUrl: 'pacientes-table.component.html',
            styleUrls: ['pacientes-table.component.css'],
            providers: [pacientes_service_1.PacientesService]
        }), 
        __metadata('design:paramtypes', [pacientes_service_1.PacientesService])
    ], PacientesTableComponent);
    return PacientesTableComponent;
}());
exports.PacientesTableComponent = PacientesTableComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2llbnRlcy9wYWNpZW50ZXMtdGFibGUvcGFjaWVudGVzLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELGtDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBU3REO0lBSUksaUNBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBRnRELGNBQVMsR0FBRyxFQUFFLENBQUM7SUFJZixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFELENBQUM7SUFqQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztTQUNoQyxDQUFDOzsrQkFBQTtJQVlGLDhCQUFDO0FBQUQsQ0FYQSxBQVdDLElBQUE7QUFYWSwrQkFBdUIsMEJBV25DLENBQUEiLCJmaWxlIjoicGFjaWVudGVzL3BhY2llbnRlcy10YWJsZS9wYWNpZW50ZXMtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGFjaWVudGVzU2VydmljZX0gZnJvbSBcIi4uL3BhY2llbnRlcy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwYWNpZW50ZXMtdGFibGUnLFxuICAgIHRlbXBsYXRlVXJsOiAncGFjaWVudGVzLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncGFjaWVudGVzLXRhYmxlLmNvbXBvbmVudC5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtQYWNpZW50ZXNTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQYWNpZW50ZXNUYWJsZUNvbXBvbmVudCB7XG5cbiAgICBwYWNpZW50ZXMgPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFjaWVudGVzU2VydmljZTogUGFjaWVudGVzU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGFjaWVudGVzID0gdGhpcy5wYWNpZW50ZXNTZXJ2aWNlLmdldFBhY2llbnRlcygpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
