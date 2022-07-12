var numberElement = document.querySelector(".currentNumber");
var currentNumber = 0;

function limitaContador(operacao, n){
    if(operacao == "subtrair"){
        if(n > 0){
            document.querySelector(".aviso").innerHTML = "";
            return true;
        }else{
            document.querySelector(".aviso").innerHTML = "Limite alcançado!";
            return false;
        }
    }else{
        if(n < 10){
            document.querySelector(".aviso").innerHTML = "";
            return true;
        }else{
            document.querySelector(".aviso").innerHTML = "Limite alcançado!";
            return false;
        }
    }
}

function decrement(){
    if(limitaContador("subtrair", currentNumber)){
        numberElement.innerHTML = --currentNumber;
    }
}

function increment(){
    if(limitaContador("somar", currentNumber)){
        numberElement.innerHTML = ++currentNumber;
    }
}

// Com addEventListener
var numberElement_2 = document.querySelector(".currentNumber_2");
var currentNumber_2 = 0;

const elementSomar = document.querySelector(".somar");
const elementSubtrair = document.querySelector(".subtrair");

elementSomar.addEventListener("click", increment_2);
elementSubtrair.addEventListener("click", decrement_2);

function decrement_2(){
    if(limitaContador("subtrair", currentNumber_2)){
        numberElement_2.innerHTML = --currentNumber_2;
    }
}

function increment_2(){
    if(limitaContador("somar", currentNumber_2)){
        numberElement_2.innerHTML = ++currentNumber_2;
    }
}

