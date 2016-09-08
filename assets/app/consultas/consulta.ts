export class Consulta {
  constructor(
      public doctor: string,
      public paciente: string,
      public motivo: string,
      public fecha: Date,
      public patologia_asociada?: string,
      public antecedentes?: string,
      public peso?: number,
      public talla?: string,
      public t_a?: string,
      public temperatura?: number,
      public frecuencia_cardiaca?: number,
      public frecuencia_respiratoria?: number,
      public glucosa?: number) {
  }
}
