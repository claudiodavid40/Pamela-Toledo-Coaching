const contenedorUl = document.getElementById('navbarSupportedContent');
const lista = document.getElementById('lista');
const hamb = document.getElementById('hamb');
const btn = document.getElementById('submit');
const form = document.getElementById('form');
const nombre = document.querySelector('.nombreCompleto');
const email = document.querySelector('.email');
const telefono = document.querySelector('.telefono');
const comentarios = document.querySelector('.textArea');

const modificarMenu = () => {
  const uno = document.getElementById('barraUno');
  const dos = document.getElementById('barraDos');
  const tres = document.getElementById('barraTres');

  if (dos.style.opacity !== '0') {
    uno.style.transform = 'translateY(10px) rotate(45deg)';
    uno.style.transition = 'all 0.2s ease-in-out';
    tres.style.transform = 'translateY(-10px) rotate(135deg)';
    tres.style.transition = 'all 0.2s ease-in-out';
    dos.style.opacity = '0';
    dos.style.transition = 'all 0.2s ease-in-out';
  } else {
    uno.style.transform = 'translateY(0px) rotate(0deg)';
    tres.style.transform = 'translateY(0px) rotate(0deg)';
    dos.style.opacity = '1';
    dos.style.transition = 'all 0.2s ease-in-out';
    tres.style.transition = 'all 0.2s ease-in-out';
    uno.style.transition = 'all 0.2s ease-in-out';
  }
};

(function () {
  emailjs.init('user_hCqWm2f1dBjU8MxczFLo6');
})();

const sendEmail = (e) => {
  e.preventDefault();
  validarCampos();
};

const enviarForm = (nombre, email, telefono, comentarios) => {
  emailjs.send('service_h04lqaq', 'template_lftvgwp', {
    nombre: nombre,
    email: email,
    telefono: telefono,
    comentarios: comentarios,
  });
};

const validarCampos = () => {
  if (
    nombre.value === '' ||
    email.value === '' ||
    comentarios.value === '' ||
    telefono.value === ''
  ) {
    completarCampos();
  } else {
    enviarForm(nombre.value, email.value, telefono.value, comentarios.value);
    exito();
    form.reset();
  }
};

const completarCampos = () => {
  swal({
    text: 'Todos los campos son requeridos',
    icon: 'warning',
    button: 'Cerrar',
  });
};

const exito = () => {
  swal({
    text: 'Formulario enviado con éxito!',
    icon: 'success',
    button: 'Cerrar',
  });
};

const start = () => {
  btn.addEventListener('click', sendEmail);
  hamb.addEventListener('click', modificarMenu);
};

window.onload = start;
