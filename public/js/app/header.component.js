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
var dropdown_directive_1 = require("./dropdown.directive");
var doctor_1 = require("./auth/doctor");
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', doctor_1.Doctor)
    ], HeaderComponent.prototype, "user", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-header',
            templateUrl: 'header.component.html',
            styles: ["\n        .navbar {\n            margin-bottom: 0;\n        }\n        \n        .navbar .navbar-nav > li > a {\n            color: white;\n        }\n        \n        .navbar .navbar-nav > li {\n            z-index: 9999;\n        }\n    "],
            directives: [dropdown_directive_1.Dropdown]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF1QyxlQUFlLENBQUMsQ0FBQTtBQUN2RCxtQ0FBeUIsc0JBQXNCLENBQUMsQ0FBQTtBQUNoRCx1QkFBcUIsZUFBZSxDQUFDLENBQUE7QUFxQnJDO0lBSUk7SUFBZSxDQUFDO0lBRWhCLGtDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTEQ7UUFBQyxZQUFLLEVBQUU7O2lEQUFBO0lBckJaO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLE1BQU0sRUFBRSxDQUFDLGtQQVlSLENBQUM7WUFDRixVQUFVLEVBQUUsQ0FBQyw2QkFBUSxDQUFDO1NBQ3pCLENBQUM7O3VCQUFBO0lBVUYsc0JBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQVRZLHVCQUFlLGtCQVMzQixDQUFBIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gXCIuL2Ryb3Bkb3duLmRpcmVjdGl2ZVwiO1xuaW1wb3J0IHtEb2N0b3J9IGZyb20gXCIuL2F1dGgvZG9jdG9yXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1oZWFkZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5uYXZiYXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgPiBsaSB7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICB9XG4gICAgYF0sXG4gICAgZGlyZWN0aXZlczogW0Ryb3Bkb3duXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdXNlcjogRG9jdG9yO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
