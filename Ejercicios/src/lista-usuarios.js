import * as $ from 'jquery';

function procesarUsuarios (usuarios) {
  for (let usuario of usuarios) {
    console.log(`(${usuario.id}) ${usuario.nombre} ${usuario.apellido}`);
  }
};

$.get('http://angular4.dmblab.com/api/usuarios.php', usuarios => {
  for (let usuario of usuarios) {
    console.log(`(${usuario.id}) ${usuario.nombre} ${usuario.apellido}`);
  }
});