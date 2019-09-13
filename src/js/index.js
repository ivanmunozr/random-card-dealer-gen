/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use

window.onload = function() {
  let pintas = ["&diams;", "&hearts;", "&clubs;", "&spades;"];
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  function buscar(num) {
    let x = Math.floor(Math.random() * num);
    return x;
  }
  let variable = pintas[buscar(pintas.length)];
  if (variable == "&diams;" || variable == "&hearts;") {
    document.getElementById("pinta-up").style.color = "red";
    document.getElementById("pinta-down").style.color = "red";
    document.getElementById("pinta-up").innerHTML = variable;
    document.getElementById("pinta-down").innerHTML = variable;
    document.getElementById("numero").innerHTML =
      numeros[buscar(numeros.length)];
    document.getElementById("numero").style.color = "red";
  } else {
    document.getElementById("pinta-up").style.color = "black";
    document.getElementById("pinta-down").style.color = "black";
    document.getElementById("pinta-up").innerHTML = variable;
    document.getElementById("pinta-down").innerHTML = variable;
    document.getElementById("numero").innerHTML =
      numeros[buscar(numeros.length)];
  }
};
