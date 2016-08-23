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
var core_1 = require("@angular/core");
var pacientes_service_1 = require("./pacientes.service");
var PacientesSidebarComponent = (function () {
    function PacientesSidebarComponent(pacienteService) {
        this.pacienteService = pacienteService;
    }
    PacientesSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pacienteService.pacienteEmitter.subscribe(function (data) {
            _this.sPaciente = data;
        });
    };
    PacientesSidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pacientes-sidebar',
            templateUrl: 'pacientes-sidebar.component.html',
            styleUrls: ['pacientes-sidebar.component.css']
        }), 
        __metadata('design:paramtypes', [pacientes_service_1.PacientesService])
    ], PacientesSidebarComponent);
    return PacientesSidebarComponent;
}());
exports.PacientesSidebarComponent = PacientesSidebarComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2llbnRlcy9wYWNpZW50ZXMtc2lkZWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQVNyRDtJQUlJLG1DQUFvQixlQUFpQztRQUFqQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7SUFFckQsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FDMUMsVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUE7UUFDekIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBcEJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDakQsQ0FBQzs7aUNBQUE7SUFnQkYsZ0NBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGlDQUF5Qiw0QkFlckMsQ0FBQSIsImZpbGUiOiJwYWNpZW50ZXMvcGFjaWVudGVzLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQYWNpZW50ZXNTZXJ2aWNlfSBmcm9tIFwiLi9wYWNpZW50ZXMuc2VydmljZVwiO1xuaW1wb3J0IHtQYWNpZW50ZX0gZnJvbSBcIi4vcGFjaWVudGVzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdwYWNpZW50ZXMtc2lkZWJhcicsXG4gICAgdGVtcGxhdGVVcmw6ICdwYWNpZW50ZXMtc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ3BhY2llbnRlcy1zaWRlYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYWNpZW50ZXNTaWRlYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHNQYWNpZW50ZTogUGFjaWVudGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhY2llbnRlU2VydmljZTogUGFjaWVudGVzU2VydmljZSkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucGFjaWVudGVTZXJ2aWNlLnBhY2llbnRlRW1pdHRlci5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNQYWNpZW50ZSA9IGRhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
