export class PacientesService {
    private pacientes = [
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

    getPacientes() {
        return this.pacientes;
    }

}
