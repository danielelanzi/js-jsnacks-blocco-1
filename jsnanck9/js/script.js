// <===========================INIZIO========================>
// Scrivi un generatore di frasi della Fortuna...
// ad ogni refresh della pagiuna comparirà una frase a caso tra un set di frasi
// Oggi troverai una cosa dimenticata
// Ciò che è fatto è fatto
// Il buon giorno si vede dal mattino
// Sicuro di aver chiuso il gas?
// Chi semina vento raccoglie tempesta
// Il mattino ha l'oro in bocca
// Tanto va la gatta al lardo che ci lascia lo zampino

var arrayFrasi = ['Oggi troverai una cosa dimenticata', 'Ciò che è fatto è fatto', 'Il buon giorno si vede dal mattino', 'Sicuro di aver chiuso il gas?', 'Chi semina vento raccoglie tempesta', 'Il mattino ha l\'oro in bocca', 'Tanto va la gatta al lardo che ci lascia lo zampino'];
var random = Math.floor(Math.random() * ((arrayFrasi.length)));
console.log(random);
alert(arrayFrasi[random]);

// <===========================FINE========================>
