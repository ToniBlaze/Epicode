// Esercizi aggiuntivi
function isNumber(value) 
{
   return typeof value === 'number';
}
function isPositiveInteger(s)
{
    var i = +s; 
    if (i < 0) return false; 
    if (i != ~~i) return false;
    return true;
}
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
/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(array){

    sum=0;
for(const element of array){
if (element > 5){
    console.log(true,element);
    sum+=element;
}
}
return sum;
}
console.log('Somma elementi random: ',checkArray(giveMeRandom(20,0,10)));
/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
    item1 = {
        'nome': 'laptop',
        'id': '89uja900',
        'qty': 1,
        'pc':500
    },
    item2 = {
        'nome': 'trackpad',
        'id': '89ak900',
        'qty': 2,
        'pc':210
    },
    item3 = {
        'nome': 'pen',
        'id': '89ujrr00',
        'qty': 10,
        'pc':1
    },

];
const item4 = {
    'nome': 'pen',
    'id': '89ujrr00',
    'qty': 10,
    'pc':1
};
function shoppingCartTotal(cart){
    if(!Array.isArray(cart)){
        let sum = cart.qty * cart.pc;
        return sum;
    }else{
        let sum=0;
        for(const item of cart){
            sum += item.qty*item.pc;
        }
        return sum;
    }
}
console.log('Totale carrelo: ',shoppingCartTotal(item4));

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isItemCorrect(item){
    if(item.pc && item.nome && item.id && item.qty && item.pc) return true;
    return false;
}
function addToShoppingCart(item) {
    if(isItemCorrect(item)) {
        shoppingCart.push(item);
        console.log(shoppingCart.length);
}
}
addToShoppingCart(item4);
/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(cart){
    if(Array.isArray(cart)){
        let maxItem = {'pc':0} ;
        for(const item of cart){
        if(maxItem.pc < item.pc) maxItem = item;
        } 
        return maxItem;
    }else{
        return cart;
    }
}
console.log(maxShoppingCart(shoppingCart));
/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(cart){
    if(Array.isArray(cart)){
        return cart[cart.length - 1];
    }else{
return cart;
    }
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function loopUntil(n, min, max,x){
    counter = 0;
    while(counter <= n){
let rand = getRandomInt(min, max);
        console.log(rand);
        if(rand >= x){
            counter++;
        }
    }

}

console.log(loopUntil(3,0,9,4));
/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function average(array) {
     if(Array.isArray(array)){
         let sum = 0;
         for(const item of array){
         if(isNumber(item)){
             sum += item;
         }else{
             return `${array} non è un array valido.`
         }
     }
     return sum / array.length;
     }else{
        return `${array} non è un array valido.`
     }
 }
console.log(average([4,5,6,2,1]));

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
