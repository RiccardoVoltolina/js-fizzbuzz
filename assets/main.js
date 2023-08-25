/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare (si)?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
 */

/* strumenti */

/* 
-console.log
-for
-if/else
*/

/* Come procedere */

/* utilizzo for e console log per stampare i numeri in console */

/* creo all' interno del for degli if/ else */


/* function multiplesOf(numbers, number) { // add second argument
  var multiples = []; // change to array (so that we can store multiple numbers - not just one multiple)
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % number === 0) { // divide by the number
      multiples.push(numbers[i]); // add the current multiple found to the multiples array
    }
  }

  return multiples;
}

console.log(multiplesOf([4, 5, 6, 7, 8], 2)); // Output: [4, 6, 8]
 */

for (let i = 1; i < 101; i++) {
    console.log(i);
    let multiple3 = i * 3

    if (i === multiple3) {
        console.log('Fizz');
    }
    else {
        console.log('non è multiplo');
    }
}