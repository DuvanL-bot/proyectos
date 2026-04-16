const link = "https://api.covidtracking.com/v1/us/daily.json";

document.getElementById("Ver_datos").addEventListener("submit", function (e) {
    e.preventDefault();
    resultado();
});


const lectura = async () => {
    const id = await (await fetch(link)).json()
    return id;
}


const resultado = async function () {
    const ultimo = await lectura();
    const array = ultimo;

    const info = document.getElementById("informacion");
    info.textContent;

    for (let i = 0; i < array.length; i++) {
        info.textContent += JSON.stringify(array[i]) + "\n"
        const element = array[i];
        console.log(element);

    }

}
