/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.

*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1*l2;
}
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(int1,int2) {
    if (int1 == parseInt(int1) && int2 == parseInt(int2)){
        return int1 == int2 ? (int1+int2)*3 : int1 +int2;
    }else{
        return "i valori non sono numeri interi" ;
    }
}
console.log(crazySum(3.3,3));
/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(int1,int2) {
    if (int1 == parseInt(int1) && int2 == parseInt(int2)){
        return Math.abs(int1 - int2) > 19 ? Math.abs(int1 - int2)*3 : Math.abs(int1 - int2);
    }else{
        return "i valori non sono numeri interi" ;
    }
}
console.log(crazyDiff(45,5));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(int){
    if(int ===parseInt(int)){
return (int>=20 && int<=100) || int == 400
    } else {
        return "parametro non intero";
    }
}
console.log(boundary(120));
/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(str) {
    if (typeof str === 'string' || str instanceof String){
    if (!str.indexOf('code')==0) 
    {return 'code'.concat(str);}
    else {return str;}
    }else{
        return `${str} non è una stringa`
    }
}
console.log(codify('codeshit'));
/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isPositiveInteger(s)
{
    var i = +s; 
    if (i < 0) return false; 
    if (i != ~~i) return false;
    return true;
}

function check3and7(positiveInteger){
    if(isPositiveInteger(positiveInteger)){
        var positiveInteger = +positiveInteger;
        return (positiveInteger%3 == 0) || (positiveInteger%7 == 0) || false;  
    }else{
        return `${positiveInteger} non è un numero positivo`
    }

}
console.log(check3and7(9));
/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isString(string) {
    if (typeof string === 'string' || string instanceof String) return true;
    return false;
}
function reverseString(string){
if(isString(string) ){
return string.split("").reverse().join("");
}else{
    return `${string} non è una stringa`
}
}
console.log(reverseString('rovescia questa scritta'));
/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str){
    if (isString(str)){
        let words = str.split(" ");
        for(i=0; i<words.length; i++){
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");

    }else{
        return `${str} non è una stringa`
    }
}

console.log(upperFirst("la tana della colombiana è ana"));
/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str){
     if (isString(str)){
        return str.slice(1,str.length-1);
    }else{
        return `${str} non è una stringa`
    }
}
console.log(cutString("<topa>"));
/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  
    return Math.floor(Math.random() * (max - min) + min);
  }
function giveMeRandom(n, min, max){
if (isPositiveInteger(n)){
    array  =[];
    for (let index = 0; index < n; index++) {
         array[index] =  getRandomInt(min, max);
    }
return array;
}else{
    return `${positiveInteger} non è un numero positivo`;
}
}

console.log(giveMeRandom(20,0,10));