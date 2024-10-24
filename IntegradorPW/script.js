const slider = document.querySelector("#slider");
let sliderSeleccionado = document.querySelectorAll(".slider-seleccionado");
let ultimoSlider = sliderSeleccionado[sliderSeleccionado.length -1];

const botonIzq = document.querySelector("#b-izquierda");
const botonDer = document.querySelector("#b-derecha");

slider.insertAdjacentElement('afterbegin', ultimoSlider);

function Siguiente(){

let primerSlider = document.querySelectorAll(".slider-seleccionado")[0];
slider.style.marginLeft = "-200%";
slider.style.transition = "all 1s";
setTimeout(function(){
 slider.style.transition = "none";
 slider.insertAdjacentElement('beforeend',primerSlider);
slider.style.marginLeft = "-100%";


}, 1000)

}


function Anterior(){

  let sliderSeleccionado = document.querySelectorAll(".slider-seleccionado");
 let ultimoSlider = sliderSeleccionado[sliderSeleccionado.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 1s";
  setTimeout(function(){
   slider.style.transition = "none";
   slider.insertAdjacentElement('afterbegin',ultimoSlider);
  slider.style.marginLeft = "-100%";
  
  
  }, 1000)
  
  }


botonDer.addEventListener('click', function(){
Siguiente();
});

botonIzq.addEventListener('click', function(){
  Anterior();
  });