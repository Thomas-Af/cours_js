const tabLetters = ['abcdefghijklmnopqrstuvwxyz'];
const tabMajLetters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const tabNumbers = ['0123456789'];
const tabCaracters = ["!.?@&$#_-+*/="];

const range = document.getElementById("length");
const majElement = document.getElementById("maj");
const numberElement = document.getElementById("number");
const caractersElement = document.getElementById("caracters");
const mp = document.getElementById("password");

let letter = '';
let letterMaj = '';
let number = '';
let caracter = '';

function getNumber(i) {
  const number = Math.floor(Math.random() * i);
  return number;
}
function getLetter () {
  const randomLetters = tabLetters[0][getNumber(26)];
  return randomLetters;
}
function getMajLetter () {
  const randomMajLetters = tabMajLetters[0][getNumber(26)];
  return randomMajLetters;
}
function getNumbers () {
  const randomNumbers = tabNumbers[0][getNumber(10)];
  return randomNumbers;
}
function getCaracters () {
  const randomCaracters = tabCaracters[0][getNumber(13)];
  return randomCaracters;
}


function password() {
  let tabPassword = [];
  let password = '';

  if (majElement.checked == false && numberElement.checked == false && caractersElement.checked == false) {
      for(let i = 0; i<range.value; i++){
        letter = getLetter();
        tabPassword.push(letter);
  
        let value = tabPassword[Math.floor(Math.random() * tabPassword.length)];
        password += value;
      }  
  }

  if (majElement.checked && numberElement.checked == false && caractersElement.checked == false) {
    const majuscule = Math.floor(Math.random() * ((range.value-4) - 1)) + 1;
    const minu = range.value - majuscule;
    for(let i = 0; i<range.value; i++){

      for (let i = 0; i<=majuscule; i++) {
        letterMaj = getMajLetter();
        tabPassword.push(letterMaj);
      }
      for(let i = 0; i<=minu; i++){
        letter = getLetter();
        tabPassword.push(letter)
      }

      let value = tabPassword[Math.floor(Math.random() * tabPassword.length)];
      password += value;
    } 
  }

  if (numberElement.checked && majElement.checked == false && caractersElement.checked == false) {
    const nombre = Math.floor(Math.random() * ((range.value-4) - 1)) + 1;
    const minu = range.value - nombre;
    for(let i = 0; i<range.value; i++){

      for(let i = 0; i<=nombre; i++){
        number = getNumbers();
        tabPassword.push(number)
      }
      for(let i = 0; i<=minu; i++){
        letter = getLetter();
        tabPassword.push(letter)
      }

      let value = tabPassword[Math.floor(Math.random() * range.value)];
      password += value;
    } 
  }

  if (caractersElement.checked && majElement.checked == false && numberElement.checked == false) {
    const specialCaracter = Math.floor(Math.random() * ((range.value-4) - 1)) + 1;
    const minu = range.value - specialCaracter;
    for(let i = 0; i<range.value; i++){
      

      for(let i = 0; i<=specialCaracter; i++){
        caracter = getCaracters();
        tabPassword.push(caracter)
      }
      for(let i = 0; i<=minu; i++){
        letter = getLetter();
        tabPassword.push(letter)
      }

      let value = tabPassword[Math.floor(Math.random() * range.value)];
      password += value;
    } 
  }

  if (majElement.checked && numberElement.checked && caractersElement.checked == false) {
    const majuscule = Math.floor(Math.random() * ((range.value-5) - 1)) + 1;
    const nombre = Math.floor(Math.random() * ((range.value-4-majuscule) - 1)) + 1;
    const minu = range.value - majuscule - nombre;

    for(let i = 0; i<range.value; i++){
      
      for (let i = 0; i<=majuscule; i++) {
        letterMaj = getMajLetter();
        tabPassword.push(letterMaj);
      }
      for (let i = 0; i<=nombre; i++) {
        number = getNumbers();
        tabPassword.push(number);
      }
      for(let i = 0; i<=minu; i++){
        letter = getLetter();
        tabPassword.push(letter)
      }

      let value = tabPassword[Math.floor(Math.random() * range.value)];
      password += value;
    } 
  }

  if (majElement.checked && caractersElement.checked && numberElement.checked == false) {
    const majuscule = Math.floor(Math.random() * ((range.value-5) - 1)) + 1;
    const specialCaracter = Math.floor(Math.random() * ((range.value-4-majuscule) - 1)) + 1;
    const minu = range.value - majuscule - specialCaracter;
    
    for(let i = 0; i<range.value; i++){
      
      for (let i = 0; i<=majuscule; i++) {
        letterMaj = getMajLetter();
        tabPassword.push(letterMaj);
      }
      for (let i = 0; i<=specialCaracter; i++) {
        caracter = getCaracters();
        tabPassword.push(caracter);
      }
      for(let i = 0; i<=minu; i++){
        letter = getLetter();
        tabPassword.push(letter)
      }

      let value = tabPassword[Math.floor(Math.random() * range.value)];
      password += value;
    } 
  }

  if (numberElement.checked && caractersElement.checked && majElement.checked == false) {
    const nombre = Math.floor(Math.random() * ((range.value-5) - 1)) + 1;
    const specialCaracter = Math.floor(Math.random() * ((range.value-4-nombre) - 1)) + 1;
    const minu = range.value - nombre - specialCaracter;
    
    for(let i = 0; i<range.value; i++){
      
      for (let i = 0; i<=nombre; i++) {
        number = getNumbers();
        tabPassword.push(number);
      }
      for (let i = 0; i<=specialCaracter; i++) {
        caracter = getCaracters();
        tabPassword.push(caracter);
      }
      for(let i = 0; i<=minu; i++){
        letter = getLetter();
        tabPassword.push(letter)
      }

      let value = tabPassword[Math.floor(Math.random() * range.value)];
      password += value;
    } 
  }

  if (numberElement.checked && caractersElement.checked && majElement.checked) {
    const majuscule = Math.floor(Math.random() * ((range.value-6) - 1)) + 1;
    const nombre = Math.floor(Math.random() * ((range.value-5-majuscule) - 1)) + 1;
    const specialCaracter = Math.floor(Math.random() * ((range.value-4-nombre-majuscule) - 1)) + 1;
    const minu = range.value - nombre - specialCaracter - majuscule;
    
    for(let i = 0; i<range.value; i++){
      
      for (let i = 0; i<=majuscule; i++) {
        letterMaj = getMajLetter();
        tabPassword.push(letterMaj);
      }
      for (let i = 0; i<=nombre; i++) {
        number = getNumbers();
        tabPassword.push(number);
      }
      for (let i = 0; i<=specialCaracter; i++) {
        caracter = getCaracters();
        tabPassword.push(caracter);
      }
      for(let i = 0; i<=minu; i++){
        letter = getLetter();
        tabPassword.push(letter)
      }

      let value = tabPassword[Math.floor(Math.random() * range.value)];
      password += value;
    } 
  }

  mp.innerHTML = password;
  return password;

}