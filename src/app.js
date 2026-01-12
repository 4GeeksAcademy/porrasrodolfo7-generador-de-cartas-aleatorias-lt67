import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

function cartaSelect(){

const numeros = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const palos = ["♦","♥","♠","♣"]
const elemento1 = "♦";
const elemento2 = "♥";

let numerosSelect = Math.floor(Math.random() * numeros.length)
let numeroElegido = numeros[numerosSelect]

let palosSelect = Math.floor(Math.random() * palos.length)
let paloElegido = palos[palosSelect]

if (paloElegido === elemento1 || paloElegido === elemento2) {
    palo1.style.color = 'red'
    palo2.style.color = 'red'
}
document.getElementById('palo1').innerText = paloElegido
document.getElementById('palo2').innerText = paloElegido
document.getElementById('numero').innerText = numeroElegido 
}
cartaSelect();