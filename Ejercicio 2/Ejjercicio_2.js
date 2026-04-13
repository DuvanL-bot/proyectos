const usuarios = [{id: 1, nombre: "Ana", salario: 1200000},{id: 2, nombre: "Luis", salario: 800000},{id: 3, nombre: "Carlos", salario: 2000000}];

const inf = [];

for (let i = 0; i < usuarios.length; i++) {
    //console.log(usuarios[i])
    
   usuarios[i].salario >1000000 ? (console.log(usuarios[i]),inf.push(usuarios[i])): null ;
   //console.log("invalido")


}
console.log(inf)

 
   




