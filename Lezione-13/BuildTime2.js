// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [34, 50, 20]
const shippingCost = 50
function sommaCarrello(cart){
  let sum =0;
  for(let i=0; i<cart.length; i++){
    sum += cart[i];
  
  }
  return sum;
}
function calcTotale(user,cart,shippingCost ){
  let discount = user.isAmbassador ? 0.7 : 1;
  let sum = sommaCarrello(cart);
  shippingCost = sum >100 ? 0: shippingCost;
  return  sum*discount + shippingCost;
}
let users =[marco, amy, paul];
for(user of users){
 console.log(calcTotale(user,prices,shippingCost)) 
}