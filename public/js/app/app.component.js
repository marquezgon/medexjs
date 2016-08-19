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
            template: "\n        <my-header [user]=\"doctor\"></my-header>\n        <div id=\"wrapper\">\n            <pacientes-sidebar></pacientes-sidebar>\n            <div id=\"page-content-wrapper\">\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-12\">\n                            <pacientes-table></pacientes-table>\n                        </div>\n                    </div>\n                </div>                       \n            </div>\n            <pacientes-right-sidebar></pacientes-right-sidebar>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBdUIsZUFBZSxDQUFDLENBQUE7QUFxQnZDO0lBQUE7UUFDRSxXQUFNLEdBQVcsSUFBSSxlQUFNLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBckJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSwybEJBZVQ7U0FDSixDQUFDOztvQkFBQTtJQUdGLG1CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxvQkFBWSxlQUV4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvY3RvciB9IGZyb20gJy4vYXV0aC9kb2N0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG15LWhlYWRlciBbdXNlcl09XCJkb2N0b3JcIj48L215LWhlYWRlcj5cbiAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxwYWNpZW50ZXMtc2lkZWJhcj48L3BhY2llbnRlcy1zaWRlYmFyPlxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2UtY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhY2llbnRlcy10YWJsZT48L3BhY2llbnRlcy10YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cGFjaWVudGVzLXJpZ2h0LXNpZGViYXI+PC9wYWNpZW50ZXMtcmlnaHQtc2lkZWJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBkb2N0b3I6IERvY3RvciA9IG5ldyBEb2N0b3IoJ21hcnF1ZXpnb24nLCAnR29uemFsbycsICdNw6FycXVleicpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
