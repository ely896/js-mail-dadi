/*Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può 
accedere, stampa un messaggio appropriato sull’esito del controllo*/

console.log('funziona');

//prompt per chiedere l'email

//array con lista invitati

//confronto tra elementi dell'array e variabile

//Dichiarazione variabile richiesta email

const userEmail = prompt('inserisci la tua email');

//Dichiarazione array lista invitati

let guestList = ["luca@gmail.com", "federica@libero.it", "giovanni@gmail.com", "agostin@gmail.com",];


for (let i = 0; i < guestList.length; i++) {

   console.log(guestList[i]);
    
    if (userEmail=== guestList [i]) {
        console.log('puio entrare');
    } else {
        console.log('non puoi entrare');
    }
};


