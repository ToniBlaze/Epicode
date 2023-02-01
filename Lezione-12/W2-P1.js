/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.

*/

/* SCRIVI QUI LA TUA RISPOSTA */
let max = Math.max(48, 3654);
console.log(max);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
if (6 !== 5) {
  console.log("not equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numEs3 = 10;
if (numEs3 % 5 === 0) {
  console.log("divisible by 5");
} else {
  console.log("not divisible by 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numeEs4_1 = 5;
let numeEs4_2 = 4;
if (numeEs4_1 + numeEs4_2 === 8) {
  console.log("somma uguale a 8");
  if (numeEs4_1 === 8 || numeEs4_2 === 8) {
    if (numeEs4_1 === 8) {
      console.log("primo num uguale a 8");
    }
    if (numeEs4_2 === 8) {
      console.log("secondo num uguale a 8");
    }
  } else {
    console.log("nessuno dei due numeri è uguale a 8");
  }
} else {
  console.log("somma non uguale a 8");
  if (numeEs4_1 === 8 || numeEs4_2 === 8) {
    if (numeEs4_1 === 8) {
      console.log("primo num uguale a 8");
    }
    if (numeEs4_2 === 8) {
      console.log("secondo num uguale a 8");

    }
  } else {
    console.log("nessuno dei due numeri è uguale a 8");
  }
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 51;
let costoSpedizione = totalShoppingCart > 50 ? 0 : 10;
let totale = costoSpedizione + totalShoppingCart;
console.log(totale);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
blackFriday = true;
let totalShoppingCart2 = 51;
let finalPrice = blackFriday ? (totalShoppingCart2 - (totalShoppingCart2 * 0.2)) : totalShoppingCart2
let costoSpedizione2 = finalPrice > 50 ? 0 : 10;
let totale2 = costoSpedizione2 + finalPrice;
console.log(totale2);



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 5;
let b = 10;
let c = 20;

if (a < c && a < b) {
  console.log(a);
  if (c > b) {
    console.log(b);
    console.log(c);
  } else {
    console.log(c);
    console.log(b);
  }
} else if (a < c && a > b) {
  console.log(b);
  if (c > b) {
    console.log(b);
    console.log(c);
  } else {
    console.log(c);
    console.log(b);
  }
} else if (a < b && a > c) {
  console.log(c);
  if (a > b) {
    console.log(b);
    console.log(a);
  } else {
    console.log(a);
    console.log(b);
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numEs8 = 9.5;

if (typeof numEs8 == 'number') {
  var remainder = (numEs8 % 1);
  if (remainder === 0) {
    console.log("intero");
  }
  else if (isNaN(remainder)) {
    console.log(" NaN, Infinity, or -Infinity");
  }
  else {
    console.log("float");
  }
}
else {
  console.log("non è un numero")
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numEs9 = 5;
if (numEs9 % 2 === 0) {
  console.log("pari");
} else {
  console.log("dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4
if (val < 10) {
  if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Meno di 10");
  }
} else {
  console.log("Uguale a 10 o maggiore");
}
/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let numEs11 = 10;
if (numEs11 > 20) {
  console.log("Huge");
}else if(numEs11 < 5) {
  console.log("Tiny");
}else if(numEs11 < 10) {
  console.log("Small");
}
else if(numEs11 < 15){
  console.log("Medium");
}
else if(numEs11 < 20){
  console.log("Large");
}

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let isMale = false;
let gender = isMale ? "male" : "female";
console.log(gender);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let i=0;
while (i <= 5){
  console.log(i);
  i++;
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i=0; i<=10; i++)
{console.log(i);}
/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i=0; i<=10; i++)
{
  if(i==3 || i== 8){continue;} 
  console.log(i);
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i=0; i<=10; i++)
{
  if(i%2 == 0){console.log('valore corrente: ',i, ' è pari');} else {
    console.log('valore corrente: ',i, ' è dispari');
  }
}
/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
for (let i=0; i<=100; i++)
{
  if(i%15 == 0){
    console.log('FizzBuzz');
  } else if(i%5 == 0) {
    console.log('Buzz');
  }else if(i%3 == 0) {
    console.log('Fizz');
  } else if(i%5 != 0 && i%3 != 0 && i%15 != 0) {
    console.log(i);
}
}
/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
day = 7;
switch (day) {
  case 1:
    console.log("Lunedì");
    break;
    
  case 1:
    console.log("Lunedì");
    break;
    
  case 2:
    console.log("Martedì");
    break;
    
  case 3:
    console.log("Mercoledì");
    break;
    
  case 4:
    console.log("Giovedì");
    break;
    
  case 5:
    console.log("Venerdì");
    break;
    
  case 6:
    console.log("Sabato");
    break;

  case 7:
    console.log("Domenica");
    break;
    
}