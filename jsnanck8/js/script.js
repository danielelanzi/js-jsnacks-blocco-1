// <===========================INIZIO========================>
// Snack8
// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var numeroUtente = prompt('inserisci un numero composto da 4 cifre:');
console.log('Il numero che hai inserito: ' + numeroUtente);
var n1 = parseInt(numeroUtente.charAt(0));
var n2 = parseInt(numeroUtente.charAt(1));
var n3 = parseInt(numeroUtente.charAt(2));
var n4 = parseInt(numeroUtente.charAt(3));
var somma = n1 + n2 + n3 + n4;
console.log('La somma dei numeri inseriti: ' + somma);

// <===========================FINE========================>

var numeroUtente = prompt('inserisci un numero composto da 4 cifre:');
console.log('Il numero che hai inserito: ' + numeroUtente);
var somma = 0;
for (var i = 0; i < numeroUtente.length; i++) {
  somma += parseInt(numeroUtente[i]);
}
console.log('La somma dei numeri inseriti: ' + somma);
