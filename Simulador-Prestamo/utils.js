//evento submit del formulario 
 document.getElementById("formularioDePrestami").addEventListener("submit", function (e) {
        e.preventDefault();

            const salario = Number(document.getElementById("salario").value);
            const monto = Number(document.getElementById("monto").value);
            const plazo = Number(document.getElementById("plazo").value);

            calcular(salario, monto, plazo);
    });
    let estadoGlobal="";
    //logica de prestamos 
     function calcular(salario, monto, plazo) {
        if (salario > 0 && monto > 0 && plazo > 0) {
            let resultado = salario * 0.3 * plazo;

            if (monto <= resultado) {
                estadoGlobal = `Salario= ${salario} Monto= ${monto} Plazo= ${plazo} Estado= Aceptado`;
                document.getElementById("informacionDeEstado").textContent = estadoGlobal;
            } else {
                document.getElementById("invalido").textContent = "Rechazado";
            }
        } else {
            document.getElementById("invalido").textContent = "Datos invalidos";
        }
    }

