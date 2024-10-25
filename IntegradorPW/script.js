// Array de imágenes y enlaces
const imagenes = [
  { src: 'imagenes/adele.jpg', link: 'pagina2.html#adele' }, 
  { src: 'imagenes/ariana grande.jpg', link: 'pagina2.html#arianaGrande' }, 
  { src: 'imagenes/LadyGaga.jpg', link: 'pagina2.html#LadyGaga' }, 
  { src: 'imagenes/juanes.jpg', link: 'pagina2.html#Juanes' }, 
];

const slider = document.querySelector("#slider");

function cargarImagenes() {
  imagenes.forEach(function(imgData) {
    
    let imgDiv = document.createElement('div');
    imgDiv.classList.add('slider-seleccionado');
    
    
    let enlace = document.createElement('a');
    enlace.href = imgData.link;  
    enlace.target = "_blank";    
    
  
    let img = document.createElement('img');
    img.src = imgData.src;       
    
   
    enlace.appendChild(img);
    
    imgDiv.appendChild(enlace);
    
    
    slider.appendChild(imgDiv);
  });
}


cargarImagenes();


let sliderSeleccionado = document.querySelectorAll(".slider-seleccionado");
let ultimoSlider = sliderSeleccionado[sliderSeleccionado.length - 1];

const botonIzq = document.querySelector("#b-izquierda");
const botonDer = document.querySelector("#b-derecha");

slider.insertAdjacentElement('afterbegin', ultimoSlider);

function Siguiente() {
  let primerSlider = document.querySelectorAll(".slider-seleccionado")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 1s";
  
  setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', primerSlider);
    slider.style.marginLeft = "-100%";
  }, 1000);
}

function Anterior() {
  let sliderSeleccionado = document.querySelectorAll(".slider-seleccionado");
  let ultimoSlider = sliderSeleccionado[sliderSeleccionado.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 1s";
  
  setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', ultimoSlider);
    slider.style.marginLeft = "-100%";
  }, 1000);
}

setInterval(function() {
  Siguiente();
}, 3000);

botonDer.addEventListener('click', function() {
  Siguiente();
});

botonIzq.addEventListener('click', function() {
  Anterior();
});
