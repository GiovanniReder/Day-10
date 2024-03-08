/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
let pets = ["dog", "cat", "hamster", "redfish"];

for (var i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let pets2 = ["dog", "cat", "hamster", "redfish"];
pets2.splice(0, 1);
pets2.push("dog");
console.log(pets2);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
const propLicensePlate = "GG060AZ";
cars.forEach((cars) => {
  cars.licensePlate = propLicensePlate;
});

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.

*/
const honda = {
  brand: "Honda",
  model: "Civic",
  color: "yellow",
  trims: ["elegance", "sport", "advance"],
  licensePlate: "GG060AZ",
};
cars.push(honda);
console.log(cars);

cars.forEach((cars) => {
  cars.trims.pop();
});
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [cars.map((cars) => cars.trims[0])];
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const color = cars[i].color.toLowerCase();
  if (cars[i].color.charAt(0) === "b") console.log("Fizz");
  else console.log("Buzz");
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numeriArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let g = 0;

while (numeriArray[g] !== 32 && g < numeriArray.length) {
  console.log(numeriArray[g]);
  g++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ["g", "n", "u", "z", "d"];
const alfabeto = "abcdefghijklmnopqrstuvwxyz$";

const arrayNumeri = [];

for (let i = 0; i < alfabeto.length; i++) {
  const character = alfabeto[i];
  switch (character) {
    case "a":
      arrayNumeri.push(1);
      break;
    case "b":
      arrayNumeri.push(2);
      break;
    case "c":
      arrayNumeri.push(3);
      break;
    case "d":
      arrayNumeri.push(4);
      break;
    case "e":
      arrayNumeri.push(5);
      break;
    case "f":
      arrayNumeri.push(6);
      break;
    case "g":
      arrayNumeri.push(7);
      break;
    case "h":
      arrayNumeri.push(8);
      break;
    case "i":
      arrayNumeri.push(9);
      break;
    case "j":
      arrayNumeri.push(10);
      break;
    case "k":
      arrayNumeri.push(11);
      break;
    case "l":
      arrayNumeri.push(12);
      break;
    case "m":
      arrayNumeri.push(13);
      break;
    case "n":
      arrayNumeri.push(14);
      break;
    case "o":
      arrayNumeri.push(15);
      break;
    case "p":
      arrayNumeri.push(16);
      break;
    case "q":
      arrayNumeri.push(17);
      break;
    case "r":
      arrayNumeri.push(18);
      break;
    case "s":
      arrayNumeri.push(19);
      break;
    case "t":
      arrayNumeri.push(20);
      break;
    case "u":
      arrayNumeri.push(21);
      break;
    case "v":
      arrayNumeri.push(22);
      break;
    case "w":
      arrayNumeri.push(23);
      break;
    case "x":
      arrayNumeri.push(24);
      break;
    case "y":
      arrayNumeri.push(25);
      break;
    case "z":
      arrayNumeri.push(26);
      break;
    default:
      arrayNumeri.push("Non trovato");
  }
}

console.log(arrayNumeri);
