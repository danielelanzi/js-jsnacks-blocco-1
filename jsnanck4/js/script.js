// <===========================INIZIO========================>
// snack4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var array = ['a', 'b', 'c'];
var nome = prompt('Come ti chiami?');
var domanda = confirm('Vuole partecipare?');

if (nome == array) {
  alert('Prego sei in lista, si accomodi!');
} else if (nome != array) {
  confirm('Non è in lista ma vediamo cosa possiamo fare. vuole chieda a Gastby?');
  var nome = prompt('Inserisca di nuovo il suo nome');
  array.push(nome);
  console.log(nome);
  console.log(array);
  if (nome == ""){
   alert('Mi dispiace non è in lista!');
  } else if (nome = true) {
  alert('Prego sei in lista, si accomodi!');
}
};
// <===========================FINE========================>
