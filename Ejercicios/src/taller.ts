import Vehiculo from './vehiculo';

export default class Taller {
  private num_vehiculos: number = 0;
  private vehiculos: Vehiculo[] = [];

  constructor (private max_vehiculos: number) {

  }

  meter (vehiculo: Vehiculo): string {
    if (this.num_vehiculos == this.max_vehiculos) {
      return;
    }

    this.vehiculos.push(vehiculo);
    this.num_vehiculos++;

    return `Añadid@ vehículo ${vehiculo.marca} ${vehiculo.color}`;
  }

  arreglarVehiculos (): string {
    let resultado = '';
    for (let vehiculo of this.vehiculos) {
      resultado += vehiculo.arrancar() + '<br />';
    }
    return resultado;
  }
}