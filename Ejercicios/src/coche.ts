import Vehiculo from './vehiculo';

export default class Coche extends Vehiculo {
  constructor (private motor: number, color: string, marca: string) {
    super(color, marca);
  }
}