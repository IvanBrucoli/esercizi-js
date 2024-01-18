// function saluta (nome) {
//     console.log(
//         `ciao ${nome}`
//     );
// }



// saluta ();



// function conta(numero) {
//     for (let i=1; i<=numero;i++){
//         console.log(i);
//     }
// }

 
// conta (100);



// function addizione(num1,num2) {
//     let somma = num1 + num2;
//     return somma;
// }


// let sum = addizione(10,60);

// console.log(sum);


// function pariOdispari(numero) {
//     if (numero % 2==0 ){
//         return true
//     }else {
//         return false
//     }
// }


// let numero_ottenuto= pariOdispari(66);

// console.log(numero_ottenuto);

// let array = [1,2, 52,58,12,35]



//  for (let i=0; i<array.length; i++) {
//     array[i] = array[i] * 2;
 
//  }

//     console.log(array);


//!esercizi fatti

// function generaArrayCasuale(n) {
//     let arrayCasuale = [];

//     for (let i = 0; i < n; i++) {

//         let numerocasuale = Math.floor(Math.random() * 10) + 1;


//         arrayCasuale.push(numerocasuale);
//     }

//     return arrayCasuale;
// }

// let arrayGenerato = generaArrayCasuale(5);
// console.log(arrayGenerato)
// console.log(arrayGenerato.sort(  (a,b)=> b-a  )); // ordine decrescente
// console.log(arrayGenerato.sort(  (a,b)=> a-b  )); // ordine crescente

//todo es 3

// function contanumeri (n) {
//     if ((n)>=0 && (n)<10){
//         return "una cifra"
//     } else if ((n)>=10 && (n)<100){
//         return "due cifre"
//     } else if ((n)>=100 && (n)<1000){
//         return "tre cifre"
//     } else if ((n)>=1000 && (n)<10000){
//         return "quattro cifre"
//     } else {
//         return "numero non valido"
//     };

// }



// console.log(contanumeri(1350));


//! esercizio 4

// function uguaglianza (a,b){
//     if (a===b){
//         return true
//     } else {
//         return false
//     };
// }

// console.log(uguaglianza(1,1));

//todo esercizio 5

function tabellina (num){
    console.log(num);
    for (let i=1; i<=10;i++){
        let moltiplicazione = num * i
        console.log(moltiplicazione);
    }
}


tabellina (4)