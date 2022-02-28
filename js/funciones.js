const fecha = new Date();               //fecha completa

const dia   = fecha.getDate();          //dia
const mes   = fecha.getMonth() + 1;     //mes
const anio  = fecha.getFullYear();      //ano
const mayorEdad = fecha.getFullYear()-18; 

const tuEdad = (diaNacimiento,mesNacimiento,anioNacimiento)=>{

    if(mayoriaEdad (diaNacimiento,mesNacimiento,anioNacimiento)){

		return "Eres mayor de edad" + (anio - anioNacimiento) + " años"


	}else{

		return "Tu edad es " + (anio - anioNacimiento - 1) +" Pedile permiso a tu Papi";
        
	}

	
}

const mayoriaEdad = (diaNacimiento,mesNacimiento,anioNacimiento)=>{
    if (anioNacimiento < mayorEdad){
        return true
    }else if(anioNacimiento == mayorEdad && mesNacimiento <= mes && diaNacimiento <= dia){
        return true
    }else{
    	return false
    }
}

    
let iDia = prompt("Ingresa dia de Nacimiento:");
let iMes = prompt("Ingresa mes de Nacimiento:");
let iAno = prompt("Ingresa año de Nacimiento:");
console.log(tuEdad(iDia,iMes,iAno))

let pasajero = prompt("Bievenido a CasaZoola. ¿Cual es tu Nombre?").toUpperCase();

while (pasajero === ""){
    pasajero = prompt ("¡Hola! ¿Estás allí? Por favor, ingresa tu nombre").toUpperCase();
} 


let actividad = prompt("¿Que deseas hacer hoy ?\n\nAlqAuto \n \nExcursiones \n \nAlojamiento \n \nSalir \n").toUpperCase();


while(actividad != "SALIR"){

    switch (actividad.toUpperCase()){
        case "ALQAUTO":
            let dia1 = prompt("Que dia quisieras tomar el Auto : ");
            let dia2 = prompt("Que dia devolverlo : ");
            let pasajeros = prompt("Cuantos Pasajeros son : ");
            let dia = 1
            do{
            
                if (dia1 <= 1 || dia1 > 31 || dia2 < 1 || dia2 > 31 || pasajeros <= 0){
                    alert("Los dias no estan bien Ingresados o no hay pasajeros");
                    break;
                } else if (dia1 >  dia2){
                    alert("¡Ingrese incorrectamente las Fechas!");
                    break;
                } else if   ( pasajeros <=4){
                                dia = dia2 - dia1
                                alert("Uds necesita un auto pequeno por "+ str(dia) + "dias");
                } else if ( pasajeros > 4){ 
                            dia = dia2 - dia1
                            alert("Uds necesita un auto Grande por "+ String(dia) + "dias");
                }               
            
            }while(dia1 > 0 || dia2 <32 || pasajeros > 0)
            
            
            break;
        case "EXCURSIONES":

            alert("la vamos a pasar bomba!!!!!");
            break;
        case "ALOJAMIENTO":
            alert("Algo vamos a encontrar");
            break;
        case "":
            alert("No ingresaste ningún valor, escribe una opción por favor.");
       
    }
}
