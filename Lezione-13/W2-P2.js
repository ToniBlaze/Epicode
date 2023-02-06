/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop();
console.log(me);
/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */
array2 = [];
for (let i = 0; i <= 100; i++) {
  array2.push(i);
}
console.log(array2);
/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
array3 = [];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}
for (let i = 0; i < 10; i++) {
  array3.push(getRandomInt(0, 100));
}
console.log(array3);
/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */
//Con accumulatore
array4 = [7, 8, 23, 45, 78, 15, 62];
arrayResult4 = [];
for (let i = 0; i < array4.length; i++) {
  if (array4[i] % 2 == 0) {
    arrayResult4.push(array4[i]);
  }
}
console.log(arrayResult4);

//Senza accumulatore
array4bis = [7, 8, 23, 45, 78, 15, 62];
for (let i = 0; i < array4bis.length; i++) {
  if (array4bis[i] % 2 !== 0) {
    array4bis.splice(i, 1);
    i--
  }
}
console.log(array4bis);

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */
let array5 = [7, 8, 23, 23, 45, 32];
//let sum = array5.reduce((a,c)=>a+c,0);
let sum = 0;
for (i = 0; i < array5.length; i++) {
  sum += array5[i];
}
console.log(sum);
/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/
//Con accumulatore
let array6 = [1, 2, 3, 4, 5, 6, 7];
let arrayResult6 = [];
for (i = array6.length - 1; i >= 0; i--) {
  let elem = array6[i] + 1;
  arrayResult6.push(elem);
}
console.log(arrayResult6);

//Senza accumulatore
let array6bis = [1, 2, 3, 4, 5, 6, 7];

for (i = array6bis.length - 1; i >= 0; i--) {
array6bis.splice(i, 1,array6bis[i]+1);
}
console.log('Risultato Es.6: '+ array6bis);
/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/
array7 = [7, 8, 23, 45, 78, 15, 62];
arrayResult7 = array7.filter(function (e) { if (e % 2 === 0) { return e } });

console.log(arrayResult7);
/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

let array8 = [];


for (let i = 0; i < 10; i++) {

  array8.push(getRandomIntConditional(0, 100));

}

function getRandomIntConditional(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  result = Math.floor(Math.random() * (max - min) + min);
  if (!array8.includes(result)) {
    return result;
  } else {
    getRandomInt(min, max);
  }
}
console.log(array8);
/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
let array9 = ["EPICODE", "is", "great"];
for (i = 0; i < array9.length; i++) {
  array9[i] = array9[i].length;
}
console.log(array9);
/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]*/

let array10 = [1, 3, 5];
let array10Reversed = [];
//console.log(array10.reverse());
for (let i = array10.length - 1; i >= 0; i--) {
  array10Reversed.push(array10[i]);
}
array10 = array10Reversed;
console.log(array10);


/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/
let array11 = [190, 19083, 9283, 898932, 87, 3];
let max11 = 0;
for (let i = 0; i < array11.length; i++) {
  if (array11[i] > max11) {
    max11 = array11[i];
  }
}
console.log(max11);
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

let oldestFilm;
for (let index = 0; index < movies.length; index++) {
  const elem = movies[index];
  if (oldestFilm) {
    if (elem.Year < oldestFilm.Year) {
      oldestFilm = elem;
    } 
  } else {
    oldestFilm = elem;
  }
}
console.log(oldestFilm);
/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/
console.log(movies.length);

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

moviesTitles = [];

for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  moviesTitles.push(element.Title);

}
console.log(moviesTitles);
/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
moviesTitlesAfter2000 = [];

for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  if (element.Year >= 2000) {
    moviesTitlesAfter2000.push(element.Title);
  }

}
console.log(moviesTitlesAfter2000);
/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/
const id = 'tt0355702'

let selectedMovie;

for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  if (element.imdbID == id) {
    selectedMovie = element;
    break;
  }

}
console.log(selectedMovie);

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

let sumMoviesYears = 0;

for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  sumMoviesYears += parseInt(element.Year);
}
console.log(sumMoviesYears);



/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

function searchFilm(x) {
  searchedMovies = [];
  for (let index = 0; index < movies.length; index++) {

    const element = movies[index];
    if (element.Title.indexOf(x) > -1) {
      searchedMovies.push(element);
    }
  }
  return searchedMovies;
}
console.log(searchFilm('Lord'));
let arr3 = [4, 94, 82, 14, 3, 150]

for (let i = 0; i < arr3.length; i++) {
  arr3[i] += 1
} console.log(arr3);