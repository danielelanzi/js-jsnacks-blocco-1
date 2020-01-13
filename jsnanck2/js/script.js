// <===========================INIZIO========================>
// Snack2
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var parola1 = prompt('Inserisci la prima parola');
console.log('Questa è la prima parola: ' + parola1);
var parola2 = prompt('Inserisci la seconda parola');
console.log('Questa è la seconda parola: ' + parola2);

if (parola1.length == parola2.length){
  alert('le parole hanno la stessa lunghezza')
  console.log('Non è stato possibile creare l\'insieme di parole');
} else if (parola1.length > parola2.length) {
  console.log('Hai creato un insieme di parole: ' + parola2 + ' ' + parola1);
} else {
  console.log('Hai creato un insieme di parole: '+ parola1 + ' ' + parola2);
};
// <===========================FINE========================>
