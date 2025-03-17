// Chiedere all'utente i chilometri e l'etá
const km = prompt ("Inserisci il numero di km che vuoi percorrere")
const age = prompt ("Inserisci la tua etá")

//Calcolare il prezzo del biglietto

const priceForKm = 0.21;
let ticketPrice = km * priceForKm;

console.log(`Il prezzo del biglietto é : ${ticketPrice} €`)
alert(`Il prezzo del biglietto é : ${ticketPrice} €`)