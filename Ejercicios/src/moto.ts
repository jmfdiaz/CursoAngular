import Vehiculo from './vehiculo';

export default class Moto extends Vehiculo {
  constructor (private cilindrada: number, color: string, marca: string) {
    super(color, marca);
  }
}