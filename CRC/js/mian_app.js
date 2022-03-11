const app =new Vue({
    el:'#app',
    data(){
        return{
            title:'Hola relajo',
            name:'JCO Knowledge',
            img:'https://github.com/Billyrelajado/imgbank/blob/main/Logo4.png'

        }
    }
});

var boton1 = document.getElementById('saludo');
    boton1.addEventListener("click", mostrarNombre, false);


function mostrarNombre(){
    var edad =  document.getElementById('caja-edad').value;
    var ano_nacimiento  = nacimiento(edad);
    var caja_ano = document.getElementById('caja-ano');
    caja_ano.value(ano_nacimiento);


    var cajaTexto = document.getElementById('caja-nombre');
    var x = document.getElementById("caja-nombre").value; 
    var elnombre = cajaTexto.value;
    alert("Hola "+  elnombre);
}









// variables =>  edad

// types_variables:{
//     int='1233123',
//     float='13.1416',
//     strings='bryan',
//     Boolean='true-false',
//     Date='02-26-2022',
// }

// JAVASCRIPT 
// var edad = 23;
// var nombe =  'bryan';

// PERL
// my $edad = 25;
// my $nombre ='bryan'

// JAVA - C#
// string nombre= 'bryan';
// int edad = 25;

// PHP
// $edad = 25; 
// $nombre='bryan';

// ----------
// funciones - metodos- subroutinas 


function nacimiento(edad){

   var fecha_Actual = today();
   var fecha_de_nacimiento = fecha_Actual - edad;
   return fecha_de_nacimiento;
}


function today(){
    var año = 2022;
    return año;
}