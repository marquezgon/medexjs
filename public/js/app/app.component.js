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
var doctor_1 = require('./auth/doctor');
var AppComponent = (function () {
    function AppComponent() {
        this.doctor = new doctor_1.Doctor('marquezgon', 'Gonzalo', 'Márquez');
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <my-header [user]=\"doctor\"></my-header>\n        <div id=\"wrapper\">\n            <pacientes-sidebar></pacientes-sidebar>\n            <pacientes-right-sidebar></pacientes-right-sidebar>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUIsZUFBZSxDQUFDLENBQUE7QUFZdkM7SUFBQTtRQUNFLFdBQU0sR0FBVyxJQUFJLGVBQU0sQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFaRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsK05BTVQ7U0FDSixDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3RvciB9IGZyb20gJy4vYXV0aC9kb2N0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG15LWhlYWRlciBbdXNlcl09XCJkb2N0b3JcIj48L215LWhlYWRlcj5cbiAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxwYWNpZW50ZXMtc2lkZWJhcj48L3BhY2llbnRlcy1zaWRlYmFyPlxuICAgICAgICAgICAgPHBhY2llbnRlcy1yaWdodC1zaWRlYmFyPjwvcGFjaWVudGVzLXJpZ2h0LXNpZGViYXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgZG9jdG9yOiBEb2N0b3IgPSBuZXcgRG9jdG9yKCdtYXJxdWV6Z29uJywgJ0dvbnphbG8nLCAnTcOhcnF1ZXonKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
