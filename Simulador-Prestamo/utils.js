
//logica de prestamos 
function calcular(salario, monto, plazo) {
    if (salario > 0 && monto > 0 && plazo > 0) {
        let resultado = salario * 0.3 * plazo;
        let global="";
        if (monto <= resultado) {
        global=`Salario= ${salario} Monto= ${monto} Plazo= ${plazo} Estado= Aceptado`;
            document.getElementById("informacionDeEstado").textContent = global;
        } else {
            document.getElementById("invalido").textContent = "Rechazado";
        }
    } else {
        document.getElementById("invalido").textContent = "Datos invalidos";
    }
}


// function Calculo(salario, monto, plazo) {
//     if (salario < 0 || monto < 0 || plazo < 0) {
//         return { error: "Datos invalidos" }
//     }

//     const calculo = salario * 0.3 * plazo
//     const resultado = monto <= calculo ? "Aprobado" : "Rechazado"

//     return {
//         calculo,
//         resultado
//     }

// }
