export class Imperial_Length {
  private valor_pulgadas: number;

  constructor(valor: number) {
    this.valor_pulgadas = valor;
  }

  set_pies_a_pulgadas(valor: number) {
    this.valor_pulgadas = valor * 12;
  }

  set_yardas_a_pulgadas(valor: number) {
    this.valor_pulgadas = valor * 36;
  }

  set_set_millas_a_pulgadas(valor: number) {
    this.valor_pulgadas = valor * 63.360;
  }


  get_valor_pulgadas() {
    return this.valor_pulgadas;
  }

  get_valor_pies() {
    return this.valor_pulgadas * 0.0833;
  }

  get_valor_yardas() {
    return this.valor_pulgadas * 0.027778;
  }

  get_valor_millas() {
    return this.valor_pulgadas * 0.000016;
  }
}

export class Metric_Lenght {
  private valor_centimetros: number;

  constructor(valor: number) {
    this.valor_centimetros = valor;
  }

  get_valor_centimetros() {
    return this.valor_centimetros;
  }

  get_valor_metros() {
    return this.valor_centimetros * 0.01;
  }

  get_valor_kilometros() {
    return this.valor_centimetros * 0.00001;
  }
}

export class Adapter_Length extends Metric_Lenght {
  private opcion: number;
  constructor(private objeto: Imperial_Length, opcion: number) {
    super(objeto.get_valor_pulgadas());
    this.opcion = opcion;
  }

  get_conversion_centimetros() {
    let resultado = 0;
    if (this.opcion === 1) {
      resultado = this.objeto.get_valor_pulgadas() * 2.54;
      return resultado;
    }

    if (this.opcion === 2) {
      resultado = this.objeto.get_valor_pies() * 60.94;
      return resultado;
    }

    if (this.opcion === 3) {
      resultado = this.objeto.get_valor_yardas() * 182.88;
      return resultado;
    }
  }

  
}

let objeto_1: Imperial_Length = new Imperial_Length(50);

