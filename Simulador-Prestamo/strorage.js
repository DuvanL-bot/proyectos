//Local Storage de los prestamos acceptados

document.getElementById("formularioDePrestami").addEventListener("submit", function guardar(e) {
    e.preventDefault();

    const informacionDeEstado = document.getElementById("informacionDeEstado").textContent;
    const filterlist = JSON.parse(localStorage.getItem("prestamos")) || [];

    function guardarPrestamo(prestamo) {
        filterlist.push(prestamo);
        localStorage.setItem("prestamos", JSON.stringify(filterlist));
    }

    function eliminarPrestamo(index) {
        const lista = JSON.parse(localStorage.getItem("prestamos")) || [];
        lista.splice(index, 1);
        localStorage.setItem("prestamos", JSON.stringify(lista));
        renderizarLista();
    }

    function renderizarLista() {
        const lista = JSON.parse(localStorage.getItem("prestamos")) || [];
        const contenedor = document.getElementById("text");
        contenedor.innerHTML = "";

        lista.forEach(function(item, index) {
            const div = document.createElement("div");
            div.style.display = "flex";
            div.style.alignItems = "center";
            div.style.gap = "8px";
            div.style.marginBottom = "4px";

            const span = document.createElement("span");
            span.textContent = item;

            const boton = document.createElement("button");
            boton.textContent = "❌";
            boton.style.cursor = "pointer";
            boton.style.border = "none";
            boton.style.background = "transparent";
            boton.style.color = "red";
            boton.style.fontSize = "18px";

            boton.addEventListener("click", function() {
                eliminarPrestamo(index);
            });

            div.appendChild(span);
            div.appendChild(boton);
            contenedor.appendChild(div);
        });
    }

    if (informacionDeEstado) {
        guardarPrestamo(informacionDeEstado);
        renderizarLista();
    }
});