document.getElementById("formularioDePrestami").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("informacionDeEstado").textContent = "";
  document.getElementById("invalido").textContent = "";

  const salario = Number(document.getElementById("salario").value);
  const monto = Number(document.getElementById("monto").value);
  const plazo = Number(document.getElementById("plazo").value);

  calcular(salario, monto, plazo);

  prestamosrealizado()
});


document.getElementById("formularioDePrestami").addEventListener("reset", function () {
  document.getElementById("informacionDeEstado").textContent = "";
  document.getElementById("invalido").textContent = "";
  document.getElementById("formularioDePrestami").reset();
});

let estadoGlobal= "";

function calcular(salario, monto, plazo) {
  if (salario > 0 && monto > 0 && plazo > 0) {
    let resultado = salario * 0.3 * plazo;

    if (monto <= resultado) {
      estadoGlobal = `Salario= ${salario} Monto= ${monto} Plazo= ${plazo} Estado= Aceptado`;
      document.getElementById("informacionDeEstado").textContent = estadoGlobal;
    } else {
      document.getElementById("invalido").textContent = "Rechazado";
    }
  } else {
    document.getElementById("invalido").textContent = "Datos invalidos";
  }
}
const filterlist= document.querySelector("#filterlist");

function prestamosrealizado() {

    const filterlist=document.createElement("li")
    filterlist.innerText= estadoGlobal;
    document.body.appendChild(filterlist);

    
};

