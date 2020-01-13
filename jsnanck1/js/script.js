// <===========================INIZIO========================>
// Snack1
// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

var numero1 = parseInt(prompt('Inserisci il primo numero'));
console.log('Il primo numero inserito è: ' + numero1);
var numero2 = parseInt(prompt('Inserisci il secondo numero'));
console.log('Il secondo numero inserito è: ' + numero2);

if (numero1 == numero2) {
  alert('hai inserito due numeri uguali');
} else if (numero1 > numero2){
  console.log('Il primo numero inserito è maggiore: ' + numero1);
} else {
  console.log('Il secondo numero inserito è maggiore: ' + numero2);
};
// <===========================FINE========================>
