export default class Vehiculo {
  constructor (public color: string, public marca: string) {

  }

  arrancar (): string {
    return `Arrancado ${this.marca} ${this.color}`;
  }

  parar (): string {
    return `Parando ${this.marca} ${this.color}`;
  }

  repostar (): string {
    return `Repostando ${this.marca} ${this.color}`;
  }
}
