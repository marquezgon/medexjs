"use strict";
var PacientesService = (function () {
    function PacientesService() {
        this.pacientes = [
            {
                nombre: 'Gonzalo',
                apellidos: 'Marquez Cortes',
                edad: 27
            },
            {
                nombre: 'David',
                apellidos: 'Leon Cortes',
                edad: 30
            }
        ];
    }
    PacientesService.prototype.getPacientes = function () {
        return this.pacientes;
    };
    return PacientesService;
}());
exports.PacientesService = PacientesService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2llbnRlcy9wYWNpZW50ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFBQTtRQUNZLGNBQVMsR0FBRztZQUNoQjtnQkFDSSxNQUFNLEVBQUUsU0FBUztnQkFDakIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsSUFBSSxFQUFFLEVBQUU7YUFDWDtZQUNEO2dCQUNJLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixJQUFJLEVBQUUsRUFBRTthQUNYO1NBQ0osQ0FBQztJQU1OLENBQUM7SUFKRyx1Q0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSx3QkFBZ0IsbUJBa0I1QixDQUFBIiwiZmlsZSI6InBhY2llbnRlcy9wYWNpZW50ZXMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWNpZW50ZXNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHBhY2llbnRlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbm9tYnJlOiAnR29uemFsbycsXG4gICAgICAgICAgICBhcGVsbGlkb3M6ICdNYXJxdWV6IENvcnRlcycsXG4gICAgICAgICAgICBlZGFkOiAyN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBub21icmU6ICdEYXZpZCcsXG4gICAgICAgICAgICBhcGVsbGlkb3M6ICdMZW9uIENvcnRlcycsXG4gICAgICAgICAgICBlZGFkOiAzMFxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGdldFBhY2llbnRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFjaWVudGVzO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
