const prezzoKm = parseFloat (0.21)
console.log(prezzoKm)
const scontoMin = parseFloat (0.2)
console.log(scontoMin)
const scontoO65 = parseFloat (0.4)
console.log(scontoO65)

let nKm = parseInt(prompt('Numero di km:'))
console.log(nKm)

let NomCog = prompt('Nome e Cognome:')
console.log(NomCog)

let eta = parseInt(prompt('Età passeggero:'))
console.log(eta)

let prezzo = parseFloat

const km = document.getElementById('km')
km.innerHTML = nKm

const nome = document.getElementById('nome')
nome.innerHTML = NomCog

prezzo = nKm * prezzoKm

const prezzoBase = document.getElementById('prezzoBase')
prezzoBase.innerHTML = prezzo.toFixed(2)

if (eta < 19) {
    document.getElementById("prezzoBarrato").style.textDecoration = "line-through";
    prezzo = prezzo * (1 - scontoMin)
    console.log(prezzo.toFixed(2))

    const sconto = document.getElementById('sconto')
    sconto.innerHTML = 20

    const prezzoFinale = document.getElementById('prezzoFinale')
    prezzoFinale.innerHTML = prezzo.toFixed(2)
}

if (eta > 64) {
    document.getElementById("prezzoBarrato").style.textDecoration = "line-through";
    prezzo = prezzo * (1 - scontoO65)
    console.log(prezzo.toFixed(2))

    const sconto = document.getElementById('sconto')
    sconto.innerHTML = 40

    const prezzoFinale = document.getElementById('prezzoFinale')
    prezzoFinale.innerHTML = prezzo.toFixed(2)
}

if (eta <65 && eta >18) {
    document.getElementById("scontoHidden").style.display = "none";
    document.getElementById("prezzoHidden").style.display = "none";
}
