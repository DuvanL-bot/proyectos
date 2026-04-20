
const Solicitar = document.getElementById('Solicitar');
const reset = document.getElementById('reset');
const form = document.getElementById("formularioDePrestam")
const remove = document.querySelectorAll(".vaciar")

//evento submit del formulario 
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const salario = Number(document.getElementById("salario").value);
  const monto = Number(document.getElementById("monto").value);
  const plazo = Number(document.getElementById("plazo").value);

  const resultado = calcular(salario, monto, plazo);

  console.log(resultado);

});

document.addEventListener("reset", function () {

  remove.forEach(el => {
    el.textContent = "";
  });

  document.getElementById("formularioDePrestam").reset();
});
