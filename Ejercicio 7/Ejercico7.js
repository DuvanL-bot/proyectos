const link = "https://api.covidtracking.com/v1/us/daily.json";

document.getElementById("verDias").addEventListener("submit", function (e) {
  e.preventDefault();
  resultado();
});

const lectura = async function info() {
  const api = await (await fetch(link)).json();
  console.log(api);
  return api;
};

const resultado = async function () {
const dias = await lectura();
const fechas = []
 const array =  dias
    .filter((item) => item !== null)
    .filter((item) => item.positiveIncrease > 50000);

  for (let i = 0; i <= array.length; i++) {
    // const element = array[i];
    fechas.push(array[i]?.date ? array[i].date: "")
   
    
  }
 document.getElementById("dias").textContent = fechas


};

