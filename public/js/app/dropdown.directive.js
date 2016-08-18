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
var Dropdown = (function () {
    function Dropdown() {
        this.isOpen = false;
    }
    Object.defineProperty(Dropdown.prototype, "opened", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Dropdown.prototype.open = function () {
        this.isOpen = true;
    };
    Dropdown.prototype.close = function () {
        this.isOpen = false;
    };
    __decorate([
        core_1.HostBinding('class.open'), 
        __metadata('design:type', Object)
    ], Dropdown.prototype, "opened", null);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Dropdown.prototype, "open", null);
    __decorate([
        core_1.HostListener('mouseleave'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Dropdown.prototype, "close", null);
    Dropdown = __decorate([
        core_1.Directive({
            selector: '[medexDropdown]'
        }), 
        __metadata('design:paramtypes', [])
    ], Dropdown);
    return Dropdown;
}());
exports.Dropdown = Dropdown;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQW1ELGVBQWUsQ0FBQyxDQUFBO0FBS25FO0lBQUE7UUFFWSxXQUFNLEdBQVcsS0FBSyxDQUFDO0lBY25DLENBQUM7SUFaOEIsc0JBQUksNEJBQU07YUFBVjtZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVzQix1QkFBSSxHQUFKO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFMkIsd0JBQUssR0FBTDtRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBVkQ7UUFBQyxrQkFBVyxDQUFDLFlBQVksQ0FBQzs7MENBQUE7SUFJMUI7UUFBQyxtQkFBWSxDQUFDLE9BQU8sQ0FBQzs7Ozt3Q0FBQTtJQUl0QjtRQUFDLG1CQUFZLENBQUMsWUFBWSxDQUFDOzs7O3lDQUFBO0lBZi9CO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7U0FDOUIsQ0FBQzs7Z0JBQUE7SUFpQkYsZUFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksZ0JBQVEsV0FnQnBCLENBQUEiLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1ttZWRleERyb3Bkb3duXSdcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd24ge1xuXG4gICAgcHJpdmF0ZSBpc09wZW46Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5vcGVuJykgZ2V0IG9wZW5lZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
