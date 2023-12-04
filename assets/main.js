/*
Palidroma
--Chiedere all’utente di inserire una parola
--Creare una funzione per capire se la parola inserita è palindroma


Pari e Dispari
--L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
--Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
--Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
--Dichiariamo chi ha vinto.*/

// Palidroma

// chiedere all'utente una parola

// capire se la parola inserita è palindroma
function validatePalindrome() {
  let word = document.getElementById("palindromeWord").value;
  console.log(word);

  // se non inserisce un parola scrivere inserire una parola
  if (word === null || word === "") {
    console.log("non hai inserito una parola");
    word = alert("non hai inserito una parola, Inserire una parola");
  } else if (!/[a-zA-Z]/.test(word)) {
    word = alert("non hai inserito una parola, Inserire una parola");
    validate();
  }
  const lenWord = word.length;
  let result = "";
  for (let i = 0; i < lenWord / 2; i++) {
    if (word[i] !== word[lenWord - 1 - i]) {
      console.log("non è plaindroma");
      document.getElementById("resultPalindrome").classList.add("text-danger");
      document.getElementById("resultPalindrome").innerHTML =
        "la parola non è palindroma";
    } else {
      console.log("è palindroma");
      document
        .getElementById("resultPalindrome")
        .classList.remove("text-danger");
      document.getElementById("resultPalindrome").classList.add("text-primary");
      document.getElementById("resultPalindrome").innerHTML =
        "la parola è palindroma";
    }
  }
  document.getElementById("userComputer").classList.remove("d-none");
}

//PARI E DISPARI
let scelta = "";
//far scegliere all'utente pari o dispari

function evenOdd(value) {
  scelta = value;
  //document.getElementById("buttonEvenOdd").classList.add("d-none");
  //facciamo vedere chi ha vinto
  let computer = formNumber();
  if (scelta == computer) {
    document.getElementById("resultGame").classList.add("text-primary");

    document.getElementById("resultGame").innerHTML = "hai vinto";
    console.log("hai vinto");
  } else if (scelta != computer) {
    document.getElementById("resultGame").classList.add("text-danger");
    document.getElementById("resultGame").innerHTML = "hai perso";

    console.log("hai perso");
  }
}

// far scegliere all'utente un numero da 1 a 5
function formNumber() {
  let numberUser = parseInt(document.getElementById("numberForm").value);
  document.getElementById("buttonEvenOdd").classList.remove("d-none");
  document.getElementById("palindromeGame").classList.add("d-none");

  let result = "";
  if (numberUser > 5) {
    result = "il numero è più di 5";
  } else if (numberUser < 1) {
    result = " il numero è minore di 1";
  }
  document.getElementById("error").innerHTML = result;
  console.log(numberUser, " utente", result);

  // generiamo un numero random da 1 a 5
  const numberComputer = Math.floor(Math.random() * 5) + 1;
  console.log(numberComputer, " numero computer");

  // Sommare i numeri dell'utente e del computer
  const total = numberComputer + numberUser;
  console.log(total, "totale");
  // stabiliamo se il risultato è pari o disapri
  if (total % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
