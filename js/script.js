// Chiedere all'utente i chilometri e l'etá

const km = prompt ("Inserisci il numero di km che vuoi percorrere")
const age = prompt ("Inserisci la tua etá")

//Calcolare il prezzo del biglietto

const priceForKm = 0.21;
let ticketPrice = km * priceForKm;

//Sconti etá

if (age<18){
    ticketPrice *= 0.8;
}

else if (age>=65){
    ticketPrice *= 0.6
} 

//Human price

const humanPrice = ticketPrice.toFixed(2)

//Risultato

console.log(`Il prezzo del biglietto é : ${humanPrice} €`)
alert(`Il prezzo del biglietto é : ${humanPrice} €`)