const formulario = document.getElementById("formulario");
const contenedor = document.querySelector(".contenedor");

formulario.addEventListener("click",()=>{
contenedor.style.display = "flex";
contenedor.style.animation = "aparecer 1s forwards";
})
//creando la validaciones del formulario
const validaciones = () =>{
		const nombre = document.getElementById("nombre");
		const precio = document.getElementById("precio");
	if(nombre.value<5){
        alert("Debe teber mas de 5 letras");
     return false;
}
    if(precio.value<=0){
         alert("el precio debe der mayor a 0");
         return false;
}
    else{
         return true;
       }
   }

const enviarFormulario = document.getElementById("enviar");
//al clickear el boton enviar del formulario desaparece el modal
enviarFormulario.addEventListener("click",()=>{
    if(validaciones()){
	contenedor.style.animation = "desaparecer 1s forwards";
	contenedor.style.display = "none";
}
})
