"use strict";
var core_1 = require('@angular/core');
var PacientesService = (function () {
    function PacientesService() {
        this.pacienteEmitter = new core_1.EventEmitter();
        this.consultas = [
            {
                doctor: '1',
                paciente: '1',
                motivo: 'enfermo',
                fecha: new Date(),
                patologia_asociada: 'loco',
                antecedentes: '',
                peso: 67,
                talla: 'large',
                t_a: 'no se',
                temperatura: 89,
                frecuencia_cardiaca: 70,
                frecuencia_respiratoria: 99,
                glucosa: 110
            }
        ];
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
        this.pacienteEmitter.emit({ 'paciente': paciente, 'consultas': this.consultas });
    };
    return PacientesService;
}());
exports.PacientesService = PacientesService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2llbnRlcy9wYWNpZW50ZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBSzNDO0lBQUE7UUFDSSxvQkFBZSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzdCLGNBQVMsR0FBZTtZQUM1QjtnQkFDSSxNQUFNLEVBQUUsR0FBRztnQkFDWCxRQUFRLEVBQUUsR0FBRztnQkFDYixNQUFNLEVBQUUsU0FBUztnQkFDakIsS0FBSyxFQUFFLElBQUksSUFBSSxFQUFFO2dCQUNqQixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsR0FBRyxFQUFFLE9BQU87Z0JBQ1osV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsbUJBQW1CLEVBQUUsRUFBRTtnQkFDdkIsdUJBQXVCLEVBQUUsRUFBRTtnQkFDM0IsT0FBTyxFQUFFLEdBQUc7YUFDZjtTQUNKLENBQUM7UUFDTSxjQUFTLEdBQWU7WUFDNUI7Z0JBQ0ksTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFNBQVMsRUFBRSxnQkFBZ0I7Z0JBQzNCLGdCQUFnQixFQUFFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDeEMsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLFNBQVMsRUFBRSxjQUFjO2dCQUN6QixFQUFFLEVBQUUsS0FBSztnQkFDVCxTQUFTLEVBQUUsU0FBUztnQkFDcEIsTUFBTSxFQUFFLFNBQVM7YUFDcEI7WUFDRDtnQkFDSSxNQUFNLEVBQUUsT0FBTztnQkFDZixTQUFTLEVBQUUsYUFBYTtnQkFDeEIsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN4QyxJQUFJLEVBQUUsR0FBRztnQkFDVCxXQUFXLEVBQUUsSUFBSTtnQkFDakIsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsRUFBRSxFQUFFLEtBQUs7Z0JBQ1QsU0FBUyxFQUFFLGFBQWE7Z0JBQ3hCLE1BQU0sRUFBRSxTQUFTO2FBQ3BCO1NBQ0osQ0FBQztJQVdOLENBQUM7SUFURyx1Q0FBWSxHQUFaO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVELDJDQUFnQixHQUFoQixVQUFpQixRQUFpQjtRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO0lBRWxGLENBQUM7SUFFTCx1QkFBQztBQUFELENBckRBLEFBcURDLElBQUE7QUFyRFksd0JBQWdCLG1CQXFENUIsQ0FBQSIsImZpbGUiOiJwYWNpZW50ZXMvcGFjaWVudGVzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BhY2llbnRlfSBmcm9tIFwiLi9wYWNpZW50ZXNcIjtcbmltcG9ydCB7Q29uc3VsdGF9IGZyb20gXCIuLi9jb25zdWx0YXMvY29uc3VsdGFcIjtcblxuXG5leHBvcnQgY2xhc3MgUGFjaWVudGVzU2VydmljZSB7XG4gICAgcGFjaWVudGVFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHByaXZhdGUgY29uc3VsdGFzOiBDb25zdWx0YVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBkb2N0b3I6ICcxJyxcbiAgICAgICAgICAgIHBhY2llbnRlOiAnMScsXG4gICAgICAgICAgICBtb3Rpdm86ICdlbmZlcm1vJyxcbiAgICAgICAgICAgIGZlY2hhOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgcGF0b2xvZ2lhX2Fzb2NpYWRhOiAnbG9jbycsXG4gICAgICAgICAgICBhbnRlY2VkZW50ZXM6ICcnLFxuICAgICAgICAgICAgcGVzbzogNjcsXG4gICAgICAgICAgICB0YWxsYTogJ2xhcmdlJyxcbiAgICAgICAgICAgIHRfYTogJ25vIHNlJyxcbiAgICAgICAgICAgIHRlbXBlcmF0dXJhOiA4OSxcbiAgICAgICAgICAgIGZyZWN1ZW5jaWFfY2FyZGlhY2E6IDcwLFxuICAgICAgICAgICAgZnJlY3VlbmNpYV9yZXNwaXJhdG9yaWE6IDk5LFxuICAgICAgICAgICAgZ2x1Y29zYTogMTEwXG4gICAgICAgIH1cbiAgICBdO1xuICAgIHByaXZhdGUgcGFjaWVudGVzOiBQYWNpZW50ZVtdID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBub21icmU6ICdHb256YWxvJyxcbiAgICAgICAgICAgIGFwZWxsaWRvczogJ01hcnF1ZXogQ29ydGVzJyxcbiAgICAgICAgICAgIGZlY2hhX25hY2ltaWVudG86IG5ldyBEYXRlKCcwMy0yNC0xOTg5JyksXG4gICAgICAgICAgICBzZXhvOiAnTScsXG4gICAgICAgICAgICB0aXBvX3NhbmdyZTogJ08rJyxcbiAgICAgICAgICAgIGRpcmVjY2lvbjogJ1RlcGV5YWMgNDY0NicsXG4gICAgICAgICAgICBjcDogNjAyMDEsXG4gICAgICAgICAgICBtdW5pY2lwaW86ICdaYXBvcGFuJyxcbiAgICAgICAgICAgIGVzdGFkbzogJ0phbGlzY28nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5vbWJyZTogJ0RhdmlkJyxcbiAgICAgICAgICAgIGFwZWxsaWRvczogJ0xlb24gQ29ydGVzJyxcbiAgICAgICAgICAgIGZlY2hhX25hY2ltaWVudG86IG5ldyBEYXRlKCcwOC0xNS0xOTg2JyksXG4gICAgICAgICAgICBzZXhvOiAnTScsXG4gICAgICAgICAgICB0aXBvX3NhbmdyZTogJ08tJyxcbiAgICAgICAgICAgIGRpcmVjY2lvbjogJ1JhbW9uIENvcm9uYSA0JyxcbiAgICAgICAgICAgIGNwOiA2MDIwMSxcbiAgICAgICAgICAgIG11bmljaXBpbzogJ0p1YW5hY2F0bGFuJyxcbiAgICAgICAgICAgIGVzdGFkbzogJ0phbGlzY28nXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgZ2V0UGFjaWVudGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWNpZW50ZXM7XG4gICAgfVxuXG4gICAgc2VsZWN0ZWRQYWNpZW50ZShwYWNpZW50ZTpQYWNpZW50ZSkge1xuICAgICAgICB0aGlzLnBhY2llbnRlRW1pdHRlci5lbWl0KHsncGFjaWVudGUnOnBhY2llbnRlLCAnY29uc3VsdGFzJzogdGhpcy5jb25zdWx0YXN9KTtcblxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
