document.getElementById("buscarUsuarios")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const id = Number(document.getElementById("id").value);
    searchById(id);
  });

const usuarios = [
  { id: 1, nombre: "Ana", salario: 1200000 },
  { id: 2, nombre: "Luis", salario: 800000 },
  { id: 3, nombre: "santiago", salario: 10 },
];

function searchById(id_usuario) {

  const filteredusers = usuarios.filter((user) => user.id == id_usuario)

  if (filteredusers.length > 0) {
    console.log(filteredusers[0]);
    
    const resutContainer = document.getElementById("result")
    resutContainer.style.display = "block"
   document.getElementById("user_id").textContent=filteredusers[0].id;
   document.getElementById("user_name").textContent=filteredusers[0].nombre;
   document.getElementById("user_salary").textContent=filteredusers[0].salario;
   const errorContainer= document.getElementById("error")
   errorContainer.style.display="none"


    
  } else {
    const resutContainer = document.getElementById("result")
    resutContainer.style.display = "none"
    const prue =("Usuario no encontrado");
   document.getElementById("mensajeUsuario").textContent= prue;
   const errorContainer=document.getElementById("error")
   errorContainer.style.display="block"


  }

//   console.log("Usuario encontrado", filteredusers[0]);
  
}

