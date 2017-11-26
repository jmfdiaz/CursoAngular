import Taller from './taller';
import Coche from './coche';
import Moto from './moto';

import * as $ from 'jquery';

let taller = new Taller(2);

function addCoche () {
  let motor: number = parseInt(prompt('Motor:'));
  let color: string = prompt('Color:');
  let marca: string = prompt('Marca:');

  let coche = new Coche(motor, color, marca);
  let resultado = taller.meter(coche);
  $('#log').append(`<li>${resultado}</li>`);
}

function addMoto () {
  let cilindrada: number = parseInt(prompt('Ciclindadra:'));
  let color: string = prompt('Color:');
  let marca: string = prompt('Marca:');

  let moto = new Moto(cilindrada, color, marca);
  let resultado = taller.meter(moto);
  $('#log').append(`<li>${resultado}</li>`);
}

function arreglarVehiculos () {
  let resultado = taller.arreglarVehiculos();
  $('#log').append(`<li>${resultado}</li>`);
}

$(() => {
  $('#btAddCoche').on('click', addCoche);
  $('#btAddMoto').on('click', addMoto);
  $('#btArreglar').on('click', arreglarVehiculos);
});