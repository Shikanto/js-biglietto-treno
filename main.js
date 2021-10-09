let anniViaggiatore = prompt ("Benvenuto! Puoi scrivere gentilmente la tua età?");
let kilometriViaggio = prompt ("Perfetto! Quanti km dovrai percorrere?");
let prezzoBiglietto = kilometriViaggio * 0.21;
let scontoGiovani = (prezzoBiglietto * 20) / 100;
let scontoAnziani = (prezzoBiglietto * 40) / 100;
let prezzoScontatoGiovani = Math.round((prezzoBiglietto - scontoGiovani) * 100) / 100
let prezzoScontatoAnziani = Math.round((prezzoBiglietto - scontoAnziani) * 100) / 100

if (anniViaggiatore < 18) {
    alert("Il prezzo del biglietto è " + prezzoBiglietto + "€ ma siccome sei minorenne hai diritto al 20% di sconto, quindi devi pagare solo " + prezzoScontatoGiovani + "€")

} else if (anniViaggiatore >= 65) {
    alert("Il prezzo del biglietto è " + prezzoBiglietto + "€ ma siccome la sua età è superiore ai 65 anni hai diritto al 40% di sconto, quindi devi pagare solo " + prezzoScontatoAnziani + "€")

} else {
    alert("il prezzo del biglietto è " + prezzoBiglietto + "€")
}
