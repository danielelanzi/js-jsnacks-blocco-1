// <===========================INIZIO========================>
// Snack5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var array = [];

for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt('Inserisci un numero!'));
  console.log('Il numero che hai inserito: ' + numero);
  if (numero % 2 != 0) {
    array.push(numero);
  }
};
console.log(array);

// <===========================FINE========================>
// <===========================INIZIO========================>

var array = [];
var i = 0;
while (i < 6) {
var numero = parseInt(prompt('Inserisci un numero!'));
console.log('Il numero che hai inserito: ' + numero);
  if (numero % 2 != 0) {
    array.push(numero);
  };
i++;
};
console.log(array);

// <===========================FINE========================>
