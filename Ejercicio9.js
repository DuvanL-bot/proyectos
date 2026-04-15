const link = "https://api.covidtracking.com/v1/us/daily.json";

const lectura = async () => {
    const response = await fetch(link);

    const data = await response.json();
    return data;
}

const resultado = async function () {
    try {
        const array = await lectu_ra();

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(element);
        }

    } catch (error) {
        error = ("❌Error al cargar datos.")
        document.getElementById("error").textContent = error;
    }
}

resultado();