export class Paciente {
    constructor(public nombre: string, public apellidos: string, public fecha_nacimiento: Date, public sexo: string, public tipo_sangre: string, public direccion: string, public cp: number, public municipio: string, public estado: string) {

    }
}