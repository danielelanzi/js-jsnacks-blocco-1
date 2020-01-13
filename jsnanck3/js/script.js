// <===========================INIZIO========================>
// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

var somma = 0;
var i = 0;
while (i < 5) {
  var numero = parseInt(prompt('Inserisci un numero!'));
  somma = somma + numero;
  i++;
};
console.log('Il risultato dei numeri inseriti è: ' + somma);

// <===========================FINE========================>
