//Local Storage de los prestamos acceptados

document.getElementById("formularioDePrestam")
document.addEventListener("submit", function guardar(e) {
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
            div.setAttribute("id","contentarray")

            const span = document.createElement("span");
            span.textContent = item;

            const boton = document.createElement("button");
            boton.setAttribute("id", "eliminarelemtArray")

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