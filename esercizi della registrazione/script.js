
/*
const primoNumero = Number(prompt('inserisci un numero'));
console.log(primoNumero);

const secondoNumero = Number(prompt('inserisci un numero'));
console.log(secondoNumero);


if (primoNumero > secondoNumero) {
    console.log(primoNumero);
} else if (secondoNumero > primoNumero) {
    console.log(secondoNumero);
}*/


//l'utente inserisce due parole e stampa quella più lunga
/*
const parolaPrima = prompt('inserisci una parola');
    console.log(parolaPrima);

const parolaSeconda = prompt('inserisci un seconda parola');
    console.log(parolaSeconda);


if (isNaN) {
    alert('inserisci parola');  
} else if (parolaSeconda.length > parolaPrima) {
    console.log(parolaSeconda);
} else if (parolaPrima.length > parolaSeconda.length) {
    console.log(parolaPrimacerchio); 
} else {
    console.log('sono uguali');
}*/


//il software deve chiedere per 10 volte all'utente di inserire un numero
//il programma stampa la somma di tutti i numeri inseriti

//Dichiarazione array di numeri

let somma = 0;


for (let i = 0; i < 10; i++) {
    const numb = Number(prompt('scrivi un numero'));
    console.log(numb);

    somma += numb;
    console.log(somma);
}

