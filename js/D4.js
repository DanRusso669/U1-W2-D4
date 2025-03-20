/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  const m2 = l1 * l2;
  return m2;
}
console.log(`La tua area misura ${area(8, 6)} metri quadri`);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1, n2) {
  const sum = n1 + n2;
  if (n1 !== n2) {
    return sum;
  } else {
    const times = sum * 3;
    return times;
  }
}
console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n1) {
  const sum = Math.abs(19 - n1);
  if (n1 > 19) {
    const sum2 = sum * 3;
    return sum2;
  } else {
    return sum;
  }
}
console.log(`Il tuo risultato è ${crazyDiff(23)}`);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if (n > 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(89));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function epify(string) {
//   const words = string.split(" ");
//   if (words[0] !== "EPICODE") {
//     words.unshift("EPICODE");
//     const newString = words.join(" ");
//     return newString;
//   } else {
//     return string;
//   }
// }
function epify(string) {
  const word = "EPICODE";
  if (!string.startsWith(word)) {
    const newString = word.concat(" ", string);
    return newString;
  } else {
    return string;
  }
}

console.log(epify("Ciao, come va ?"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  if (n % 7 === 0 && n % 3 === 0) {
    console.log("Il tuo numero è divisibile sia per 3 che per 7");
  } else if (n % 7 === 0) {
    console.log("Il tuo numero è divisibile per 7");
  } else if (n % 3 === 0) {
    console.log("Il tuo numero è divisibile per 3");
  } else {
    console.log("Il tuo numero non è divisibile nè per 7 nè per 3");
  }
}

check3and7(28);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
  const revString = string.split("").reverse().join("");
  return revString;
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
  const words = string.split(" ");
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    const capChar = words[i][0].toUpperCase();
    const lastPart = words[i].slice(1);
    const newWords = capChar + lastPart;
    newArray.push(newWords);
  }
  const newString = newArray.join(" ");
  return newString;
}
console.log(upperFirst("il sole oggi splende"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(string) {
  const newString = string.slice(1, string.length - 1);
  return newString;
}
console.log(cutString("Ciao, come va?"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  const arrOfNums = [];
  for (let i = 0; i < n; i++) {
    const randomNum = Math.floor(Math.random() * 10);
    arrOfNums.push(randomNum);
  }
  return arrOfNums;
}

console.log(giveMeRandom(10));
