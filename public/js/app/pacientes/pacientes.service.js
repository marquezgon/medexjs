"use strict";
var core_1 = require('@angular/core');
var PacientesService = (function () {
    function PacientesService() {
        this.pacienteEmitter = new core_1.EventEmitter();
        this.pacientes = [
            {
                nombre: 'Gonzalo',
                apellidos: 'Marquez Cortes',
                fecha_nacimiento: new Date('03-24-1989'),
                sexo: 'M',
                tipo_sangre: 'O+',
                direccion: 'Tepeyac 4646',
                cp: 60201,
                municipio: 'Zapopan',
                estado: 'Jalisco'
            },
            {
                nombre: 'David',
                apellidos: 'Leon Cortes',
                fecha_nacimiento: new Date('08-15-1986'),
                sexo: 'M',
                tipo_sangre: 'O-',
                direccion: 'Ramon Corona 4',
                cp: 60201,
                municipio: 'Juanacatlan',
                estado: 'Jalisco'
            }
        ];
    }
    PacientesService.prototype.getPacientes = function () {
        return this.pacientes;
    };
    PacientesService.prototype.selectedPaciente = function (paciente) {
        this.pacienteEmitter.emit(paciente);
    };
    return PacientesService;
}());
exports.PacientesService = PacientesService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2llbnRlcy9wYWNpZW50ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBRzNDO0lBQUE7UUFDSSxvQkFBZSxHQUFHLElBQUksbUJBQVksRUFBWSxDQUFDO1FBQ3ZDLGNBQVMsR0FBZTtZQUM1QjtnQkFDSSxNQUFNLEVBQUUsU0FBUztnQkFDakIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN4QyxJQUFJLEVBQUUsR0FBRztnQkFDVCxXQUFXLEVBQUUsSUFBSTtnQkFDakIsU0FBUyxFQUFFLGNBQWM7Z0JBQ3pCLEVBQUUsRUFBRSxLQUFLO2dCQUNULFNBQVMsRUFBRSxTQUFTO2dCQUNwQixNQUFNLEVBQUUsU0FBUzthQUNwQjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFNBQVMsRUFBRSxhQUFhO2dCQUN4QixnQkFBZ0IsRUFBRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ3hDLElBQUksRUFBRSxHQUFHO2dCQUNULFdBQVcsRUFBRSxJQUFJO2dCQUNqQixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixFQUFFLEVBQUUsS0FBSztnQkFDVCxTQUFTLEVBQUUsYUFBYTtnQkFDeEIsTUFBTSxFQUFFLFNBQVM7YUFDcEI7U0FDSixDQUFDO0lBVU4sQ0FBQztJQVJHLHVDQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLFFBQWlCO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTCx1QkFBQztBQUFELENBbkNBLEFBbUNDLElBQUE7QUFuQ1ksd0JBQWdCLG1CQW1DNUIsQ0FBQSIsImZpbGUiOiJwYWNpZW50ZXMvcGFjaWVudGVzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhY2llbnRlfSBmcm9tIFwiLi9wYWNpZW50ZXNcIjtcblxuZXhwb3J0IGNsYXNzIFBhY2llbnRlc1NlcnZpY2Uge1xuICAgIHBhY2llbnRlRW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UGFjaWVudGU+KCk7XG4gICAgcHJpdmF0ZSBwYWNpZW50ZXM6IFBhY2llbnRlW10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vbWJyZTogJ0dvbnphbG8nLFxuICAgICAgICAgICAgYXBlbGxpZG9zOiAnTWFycXVleiBDb3J0ZXMnLFxuICAgICAgICAgICAgZmVjaGFfbmFjaW1pZW50bzogbmV3IERhdGUoJzAzLTI0LTE5ODknKSxcbiAgICAgICAgICAgIHNleG86ICdNJyxcbiAgICAgICAgICAgIHRpcG9fc2FuZ3JlOiAnTysnLFxuICAgICAgICAgICAgZGlyZWNjaW9uOiAnVGVwZXlhYyA0NjQ2JyxcbiAgICAgICAgICAgIGNwOiA2MDIwMSxcbiAgICAgICAgICAgIG11bmljaXBpbzogJ1phcG9wYW4nLFxuICAgICAgICAgICAgZXN0YWRvOiAnSmFsaXNjbydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbm9tYnJlOiAnRGF2aWQnLFxuICAgICAgICAgICAgYXBlbGxpZG9zOiAnTGVvbiBDb3J0ZXMnLFxuICAgICAgICAgICAgZmVjaGFfbmFjaW1pZW50bzogbmV3IERhdGUoJzA4LTE1LTE5ODYnKSxcbiAgICAgICAgICAgIHNleG86ICdNJyxcbiAgICAgICAgICAgIHRpcG9fc2FuZ3JlOiAnTy0nLFxuICAgICAgICAgICAgZGlyZWNjaW9uOiAnUmFtb24gQ29yb25hIDQnLFxuICAgICAgICAgICAgY3A6IDYwMjAxLFxuICAgICAgICAgICAgbXVuaWNpcGlvOiAnSnVhbmFjYXRsYW4nLFxuICAgICAgICAgICAgZXN0YWRvOiAnSmFsaXNjbydcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICBnZXRQYWNpZW50ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhY2llbnRlcztcbiAgICB9XG5cbiAgICBzZWxlY3RlZFBhY2llbnRlKHBhY2llbnRlOlBhY2llbnRlKSB7XG4gICAgICAgIHRoaXMucGFjaWVudGVFbWl0dGVyLmVtaXQocGFjaWVudGUpO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
