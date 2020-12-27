// esse script tem o objetivo de praticar o conteudo que aprendi sobre operadores logicos e condicionais


// criação da parte logica do script

var parque = "Entre grates se tiver 10 anos ou menos & 70 anos ou mais";

var idade = 76;

// var menor10 = idade <= 10;
// var maior70 = idade >= 70;

var menor10 = idade <= 10 && idade >=6;
var maior70 = idade >= 70 && idade <= 75;

var grates = menor10 || maior70;

// criação da parte visual do script, no cano a parte que irá ser mostrada no console


console.log(parque)
console.log("Você tem", idade,"anos!")

if (grates == true) {
    console.log("'Parabens' você ganhou a entrada grates. Divirta-se!")
}

else if (idade <= 5 || idade >= 76) {
    console.log("'Parabens' você ganhou a entrada grates. Mas so podera entra acompanhado devido a sua idade...")
}

else {
    console.log("Infelizmente você não atende aos requisitos para entrar grates. \n Pague para entrar! ")
}
