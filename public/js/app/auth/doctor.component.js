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
var doctor_1 = require('./doctor');
var DoctorComponent = (function () {
    function DoctorComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', doctor_1.Doctor)
    ], DoctorComponent.prototype, "doctor", void 0);
    DoctorComponent = __decorate([
        core_1.Component({
            selector: '<mi-doctor></mi-doctor>',
            template: "\n    <h1>Bienvenido, {{doctor.nombre}}</h1>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], DoctorComponent);
    return DoctorComponent;
}());
exports.DoctorComponent = DoctorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvZG9jdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWlDLGVBQWUsQ0FBQyxDQUFBO0FBQ2pELHVCQUF1QixVQUFVLENBQUMsQ0FBQTtBQVFsQztJQUFBO0lBRUEsQ0FBQztJQURDO1FBQUMsWUFBSyxFQUFFOzttREFBQTtJQVBWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5QkFBeUI7WUFDbkMsUUFBUSxFQUFFLGtEQUVUO1NBQ0YsQ0FBQzs7dUJBQUE7SUFHRixzQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksdUJBQWUsa0JBRTNCLENBQUEiLCJmaWxlIjoiYXV0aC9kb2N0b3IuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9jdG9yIH0gZnJvbSAnLi9kb2N0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICc8bWktZG9jdG9yPjwvbWktZG9jdG9yPicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGgxPkJpZW52ZW5pZG8sIHt7ZG9jdG9yLm5vbWJyZX19PC9oMT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBEb2N0b3JDb21wb25lbnQge1xuICBASW5wdXQoKSBkb2N0b3I6IERvY3Rvcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
