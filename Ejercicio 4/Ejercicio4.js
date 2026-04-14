const link= 'https://api.covidtracking.com/v1/us/daily.json';

const lectura= async function info()  {
    const api = await fetch(link)
    const trasf = await api.json()
    console.log(trasf)
    return api;
}
lectura()