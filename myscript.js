
/**
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
 */


// let bici = [
//     {
//        nome : "mountan bike" ,
//        peso : 20,
//     },
//     {
//         nome : "paperino bike" ,
//         peso : 15,
//     },
//     {
//         nome : "topolino bike" ,
//         peso : 18,
//     },
//     {
//         nome : "pippo bike" ,
//         peso : 10,
//     },
// ]


// // console.log(bici[0].peso)

// let biciLeggera = bici[0]

// for (let i = 0; i < bici.length; i++) {
//     if (bici[i].peso < biciLeggera.peso){
//         biciLeggera = bici[i];
//     }

// }

// console.table(biciLeggera);

/**
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
    Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
 */


// let squadreCalcio = [
//     {
//         nome : "Juventus",
//         punti : 0,
//         fallisubiti : 0,
//     },
//     {
//         nome : "Salernitana",
//         punti : 0,
//         fallisubiti : 0,
//     },
//     {
//         nome : "Napoli",
//         punti : 0,
//         fallisubiti : 0,
//     },
//     {
//         nome : "Milan",
//         punti : 0,
//         fallisubiti : 0,
//     },
//     {
//         nome : "Inter",
//         punti : 0,
//         fallisubiti : 0,
//     },
//     {
//         nome : "Roma",
//         punti : 0,
//         fallisubiti : 0,
//     },
//     {
//         nome : "Lazio",
//         punti : 0,
//         fallisubiti : 0,
//     },
// ]   



// for (let i = 0; i < squadreCalcio.length; i++) {
//     squadreCalcio[i].punti = parseInt( getRandomArbitrary(1,100));
//     squadreCalcio[i].fallisubiti =parseInt( getRandomArbitrary(1,10));

// }

// console.table(squadreCalcio)


// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }


/**
 * 
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome
    Età,  (mediaPunti) Media punti fatti per partita , (pctThree) Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
    la media punti fatti per partita deve essere compresa tra 0 e 50
    la percentuale di successo da 3 punti deve essere compresa tra 0 e 45
 * 
 */


    // const giocatoreBasket = {
    //     codiceGiocatore : generateID() ,
    //     nome : "Antonio",
    //     cognome : "Posa",
    //     eta : "25",
    //     mediaPunti : parseInt( getRandomArbitrary(0,50)),
    //     pctThree : parseInt( getRandomArbitrary(0,45)) + "%",
    
    // }
    // console.table(giocatoreBasket)
    
    // function generateID() {
    //     let id =  generateRandomLetter() + generateRandomLetter() + generateRandomLetter() + parseInt( getRandomArbitrary(1,9)) 
    //     + parseInt( getRandomArbitrary(1,9))  +parseInt( getRandomArbitrary(1,9)) ;
    //     return id;
    
    // }
    
    // function generateRandomLetter() {
    //     const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      
    //     return alphabet[Math.floor(Math.random() * alphabet.length)]
    //   }
    
    
    // function getRandomArbitrary(min, max) {
    //     return Math.random() * (max - min) + min;
    // }





    // Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
    // La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
    // Usiamo i nuovi metodi degli array forEach() o filter().  

