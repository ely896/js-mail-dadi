/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: 
Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa 
che "cosa" ci serve?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro 
programma così come lo faremmo "a mano"*/




const generaInput = document.getElementById('genera');

generaInput.addEventListener('click', function() {

    let xUser = 0

xUser = Math.floor(Math.random () * 6);
    console.log(xUser);

document.getElementById('numberUser').innerHTML = xUser;

let yComputer = 0

yComputer = Math.floor(Math.random () * 6);
    console.log(yComputer);

document.getElementById('numberComputer').innerHTML = yComputer;

if (xUser > yComputer) {
    console.log('the winner is User');
    document.getElementById('winner').innerHTML = 'The Winner is User';

} else if (yComputer > xUser){
    document.getElementById('winner').innerHTML = 'The Winner is Computer';
    console.log('the winner is Computer');
} else {
    console.log('pari');
    document.getElementById('winner').innerHTML = 'No Winner';
}
})

