const prezzoKm = parseFloat (0.21)
console.log(prezzoKm)
const scontoMin = parseFloat (0.2)
console.log(scontoMin)
const scontoO65 = parseFloat (0.4)
console.log(scontoO65)

let nKm = parseInt(prompt('Numero di km:'))
console.log(nKm)

let eta = parseInt(prompt('Età passeggero:'))
console.log(eta)

let prezzo = parseFloat

prezzo = nKm * prezzoKm
if (eta < 19) prezzo = prezzo * (1 - scontoMin)
if (eta > 64) prezzo = prezzo * (1 - scontoO65)
console.log(prezzo)