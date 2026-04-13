document.getElementById("prestamo").addEventListener("submit", function (e) {
  e.preventDefault();
  const salario = Number(document.getElementById("salario").value);
  const monto = Number(document.getElementById("monto").value);
  const plazo = Number(document.getElementById("plazo").value);
  calcular(salario, monto, plazo);
});

function calcular(salario, monto, plazo) {
  if (salario > 0 && monto > 0 && plazo > 0) {
    let resultado = salario * 0.3 * plazo;

    estado =
      monto <= resultado
        ? `Salario= ${salario} Monto= ${monto} Plazo= ${plazo} Estado= Aceptado`
        : "Rechazo";

        document.getElementById("informacion de estado").textContent= estado;

  } else {
    let error=("Datos invalidos");
    document.getElementById("invalido").textContent= error;
  }



}

