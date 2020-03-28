const titulo = document.querySelector('h1');
const seletor = document.querySelector('select');
const span = document.querySelector('span');
if(titulo && seletor && span) {
  function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(function() {
        elemento.innerHTML += letra;
        
      },75 * i)
      
    });
  }

  typeWrite(titulo)

  function handleChange(evento) {
    span.style.backgroundColor = evento.target.value;
  }

  seletor.addEventListener('change', handleChange);

}
