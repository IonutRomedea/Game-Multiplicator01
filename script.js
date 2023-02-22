// Convertim elementele din HTML in variabile
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let scoreDisplayed = document.getElementById("score-displayed");

//Numerele ce vor fi generate automat
let randomNumber1 = Math.floor(Math.random()*10);
let randomNumber2 = Math.floor(Math.random()*10);

//Counter-ul pentru raspunsuri
let realScore = 0;

//Atasarea variabilelor la elementele HTML
number1.textContent = randomNumber1;
number2.textContent = randomNumber2;

//Functia care colecteaza datele din local strorage si afiseaza rezultatul scorului 
function getData() {
    let scoreData = +localStorage.getItem("score-value");
    realScore = realScore + scoreData;
    //console.log(realScore);
    scoreDisplayed.textContent = realScore;
  };
  getData();

//Functia care calculeaza inmultirea si valideaza raspunsul (corect sau fals)
function calculate() {
    let correctAnswer = randomNumber1 * randomNumber2;
    console.log(correctAnswer);

    let playerAnswer = document.getElementById("playerAnswer").value;
    //console.log(playerAnswer);
    if (correctAnswer == playerAnswer) {
        realScore = realScore +1
    } else {
        realScore = realScore -1
    }
    //console.log(realScore)
    localStorage.setItem("score-value", realScore);

    window.location.reload();
  }

  

  