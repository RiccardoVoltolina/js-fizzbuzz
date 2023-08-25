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


/* function multiplesOf(numbers) { // add second argument
  let multiples = [3, 5]; // change to array (so that we can store multiple numbers - not just one multiple)
  for (let i = 1; i < 100; i++) {
    if (i % numbers === 0) { // divide by the number
      multiples.push(numbers[i]); // add the current multiple found to the multiples array
    }
  }

  return multiples;
}

console.log(multiplesOf); 
 */

for (let i = 1; i < 101; i++) {
    let remainder = i % 3;
    if (remainder == 0) {
        console.log('Fizz');
    }
    else {
        console.log('no');
    }
}

/*     if (i === multiple3) {
        console.log('Fizz');
    }
    else {
        console.log('non è multiplo');
    } */


//x and y are both integers
/* let remainder = x % y;
/*  *//* if (remainder == 0){ */
 ///x is a multiple of y
/* } else { */
//x is not a multiple of y
