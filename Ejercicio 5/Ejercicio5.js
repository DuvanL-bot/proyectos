const link = "https://api.covidtracking.com/v1/us/daily.json";

document
  .getElementById("buscarUsuarios")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    lectura();
  });

const searchById = (data) => {
  console.log(data);
  mostrarEnPantalla(data);
};

const lectura = async function info() {
  const api = await (await fetch(link)).json();
  console.log(api);
  searchById(api);
  return api;
};

const mostrarEnPantalla = async function (lectura) {
  const filteredusers = await lectura.filter((item) => item !== null);

  if (filteredusers.length > 0) {
    document.getElementById("fecha").textContent = filteredusers[0].dateChecked;
    document.getElementById("casos").textContent = filteredusers[0].positive;
    document.getElementById("muertes").textContent = filteredusers[0].death;
  }
  console.log(function searchById() {
    0;
  });
};
