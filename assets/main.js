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

let word = prompt("Inserire una parola");

// se non inserisce un parola scrivere inserire una parola
if (word === null || word === "") {
  console.log("non hai inserito una parola");
  word = prompt("non hai inserito una parola, Inserire una parola");
} else if (!/[a-zA-Z]/.test(word)) {
  word = prompt("non hai inserito una parola, Inserire una parola");
  validate();
}
console.log(word);

// capire se la parola inserita è palindroma
function validatePalindrome() {
  const lenWord = word.length;

  for (let i = 0; i < lenWord / 2; i++) {
    if (word[i] !== word[lenWord - 1 - i]) {
      console.log("non è plaindroma");
    } else {
      console.log("è palindroma");
    }
  }
}
const result = validatePalindrome(word);
console.log(result);
