let numero = parseInt(prompt('Quiere la tabla del...'));
let tabla = '';
for (let i = 0; i <= 10; i++) {
  let multiplicacion = numero * i;
  tabla += `${numero} x ${i} = ${multiplicacion}
`;
}
alert(tabla);