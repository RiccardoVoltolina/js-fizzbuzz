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

let element = document.getElementById ('multiple')

for (let i = 1; i < 101; i++) {
    let multiple3 = i % 3;
    let multiple5 = i % 5

    const divElement = document.createElement ('li')

    if ((multiple5 == 0) && (multiple3 == 0)) {
        console.log('FizzBuzz');
        divElement.append ('FizzBuzz')
        divElement.style.color = 'red'
       
    } else if (multiple5 == 0) {
        console.log('Buzz');
        divElement.append ('Buzz');
        divElement.style.color = 'purple'
    

    } else if (multiple3 == 0) {
        console.log('Fizz');
        
        divElement.append ('Fizz')
        divElement.style.color = 'green'
        

    }
    else {
        console.log(i);

        divElement.append (i)
        divElement.style.color = 'gray'
    }
    
    element.append(divElement)

 
}
