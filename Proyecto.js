const link = "https://api.covidtracking.com/v1/us/daily.json";

const lectura = async () => {
    const api = await (await fetch(link)).json();
    console.log(api)
    return api
}

const resultado = async function () {
    const leido = await lectura();
    const array = leido.map(function (get) {
        return get;

    });

    const info = document.getElementById("informacion");
    info.textContent;

    try {
        for (let i = 0; i <= 10; i++) {
            info.innerText += JSON.stringify(array[i].date) + "\n"
            const element = array[i];
            console.log(element)
        }
    } catch (error) {
        console.log("Error al cargar datos")
    }

}
resultado(Element)

document.getElementById("filtroinicia").addEventListener("submit", function (e) {
    e.preventDefault();
    const valor = Number(document.getElementById("filtar").value);
    filtro(valor);

});


const filtro = async function (filtar) {
    try {
        const fil = await lectura();
        const informe = fil.filter((lec) => filtar <= lec.positive);
        const infofilter = document.getElementById("info");

        infofilter.textContent = "";

        for (let i = 0; i < informe.length; i++) {
            infofilter.innerText += informe[i].date + "\n" ;
            console.log(informe[i]);
        }

    } catch (error) {
        console.log("Error al cargar datos", error);
    }
}