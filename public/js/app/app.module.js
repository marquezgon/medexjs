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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require("./app.component");
var pacientes_sidebar_component_1 = require("./pacientes/pacientes-sidebar.component");
var pacientes_right_sidebar_component_1 = require("./pacientes/pacientes-right-sidebar.component");
var header_component_1 = require("./header.component");
var pacientes_table_component_1 = require("./pacientes/pacientes-table/pacientes-table.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, pacientes_sidebar_component_1.PacientesSidebarComponent, pacientes_right_sidebar_component_1.PacientesRightSidebarComponent, header_component_1.HeaderComponent, pacientes_table_component_1.PacientesTableComponent],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2QyxpQ0FBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN4RCw4QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyw0Q0FBd0MseUNBQXlDLENBQUMsQ0FBQTtBQUNsRixrREFBNkMsK0NBQStDLENBQUMsQ0FBQTtBQUM3RixpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCwwQ0FBc0MsdURBQXVELENBQUMsQ0FBQTtBQU85RjtJQUFBO0lBRUEsQ0FBQztJQVBEO1FBQUMsZUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLENBQUMsNEJBQVksRUFBRSx1REFBeUIsRUFBRSxrRUFBOEIsRUFBRSxrQ0FBZSxFQUFFLG1EQUF1QixDQUFDO1lBQ2pJLE9BQU8sRUFBRSxDQUFDLGdDQUFhLENBQUM7WUFDeEIsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUM1QixDQUFDOztpQkFBQTtJQUdGLGdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxpQkFBUyxZQUVyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge1BhY2llbnRlc1NpZGViYXJDb21wb25lbnR9IGZyb20gXCIuL3BhY2llbnRlcy9wYWNpZW50ZXMtc2lkZWJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7UGFjaWVudGVzUmlnaHRTaWRlYmFyQ29tcG9uZW50fSBmcm9tIFwiLi9wYWNpZW50ZXMvcGFjaWVudGVzLXJpZ2h0LXNpZGViYXIuY29tcG9uZW50XCI7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQYWNpZW50ZXNUYWJsZUNvbXBvbmVudH0gZnJvbSBcIi4vcGFjaWVudGVzL3BhY2llbnRlcy10YWJsZS9wYWNpZW50ZXMtdGFibGUuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBQYWNpZW50ZXNTaWRlYmFyQ29tcG9uZW50LCBQYWNpZW50ZXNSaWdodFNpZGViYXJDb21wb25lbnQsIEhlYWRlckNvbXBvbmVudCwgUGFjaWVudGVzVGFibGVDb21wb25lbnRdLFxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlXSxcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
