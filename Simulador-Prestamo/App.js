
document.getElementById("formularioDePrestami").addEventListener("reset", function () {
  document.getElementById("informacionDeEstado").textContent = "";
  document.getElementById("invalido").textContent = "";
  document.getElementById("formularioDePrestami").reset();
  document.getElementById("text").textContent="";
});

const rellenar = document.getElementById('salario');

// Evento cuando el usuario hace clic o entra al input
rellenar.addEventListener('focus', () => {
    rellenar.style.border = "#93c5fd";
    rellenar.style.color = "#93c5fd";           
});

// Evento cuando el usuario hace clic fuera del input
rellenar.addEventListener('blur', () => {
    rellenar.style.backgroundColor = "";       
    rellenar.style.color = "";                 
});

const monto = document.getElementById('monto');

// Evento cuando el usuario hace clic o entra al input
monto.addEventListener('focus', () => {
    monto.style.border = "#93c5fd";
    monto.style.color = "#93c5fd";           
});

// Evento cuando el usuario hace clic fuera del input
monto.addEventListener('blur', () => {
    monto.style.backgroundColor = "";       
    monto.style.color = "";                 
});


const plazo = document.getElementById('plazo');

// Evento cuando el usuario hace clic o entra al input
plazo.addEventListener('focus', () => {
    plazo.style.border = "#93c5fd";
    plazo.style.color = "#93c5fd";           
});

// Evento cuando el usuario hace clic fuera del input
plazo.addEventListener('blur', () => {
    plazo.style.backgroundColor = "";       
    plazo.style.color = "";                 
});

const Solicitar = document.getElementById('Solicitar')

Solicitar.addEventListener('mouseenter', ()=> {
  Solicitar.style.backgroundColor = "rgb(115, 176, 24)";
  Solicitar.style.backgroundSize = "20px";

})

Solicitar.addEventListener('mouseleave', ()=> {
  Solicitar.style.backgroundColor = "greenyellow";
  Solicitar.style.backgroundSize = "10px";

})

const reset = document.getElementById('reset')

reset.addEventListener('mouseenter', ()=> {
  reset.style.backgroundColor = "rgb(198, 16, 16)";
  reset.style.backgroundSize = "20px";

})

reset.addEventListener('mouseleave', ()=> {
  reset.style.backgroundColor = "red";
  reset.style.backgroundSize = "10px";

})

