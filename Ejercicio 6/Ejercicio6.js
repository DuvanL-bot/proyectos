const link = "https://api.covidtracking.com/v1/us/daily.json";

document.getElementById("Envviar").addEventListener("submit", function (e) {
  e.preventDefault();
  resultado();
});

const lectura = async function info() {
  const api = await (await fetch(link)).json();
  console.log(api);
  return api;
};

const resultado = async function () {
  const ultimos = await lectura();
  const array = ultimos.map(function (get) {
    return get;
  });


  if (array.length !==null) {
    const valorFinal= array.pop();
    console.log(valorFinal);
    document.getElementById("fecha").textContent = valorFinal.dateChecked ? valorFinal.dateChecked : "No hay información";
    document.getElementById("casos").textContent = valorFinal.positive ? valorFinal.positive : "No hay información";
    document.getElementById("muertes").textContent = valorFinal.death ? valorFinal.death : "No hay información";
//   }else (array == null);{

//     const valorFinal= array.push("No hay registro");
//     document.getElementById("fecha").textContent = valorFinal.dateChecked;
//     document.getElementById("casos").textContent = valorFinal.positive;
//     document.getElementById("muertes").textContent = valorFinal.death;

  }
 };

