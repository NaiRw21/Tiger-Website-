function mostrarCuriosidade(){

document.getElementById("mensagem").innerHTML =
"🐅 Um tigre pode saltar mais de 10 metros de distância!";

}

function mostrarForca(){

document.getElementById("mensagem").innerHTML =
"💪 O rugido de um tigre pode ser ouvido a até 3 quilômetros.";

}

function mudarCor(){

let fundo=document.querySelector(".overlay");

if(fundo.style.background=="rgba(34,139,34,0.6)"){

fundo.style.background="rgba(0,0,0,0.55)";

}

else{

fundo.style.background="rgba(34,139,34,0.6)";

}

}
