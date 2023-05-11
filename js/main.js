//verification number cards
let amoutCards = 0;

//number cads in the game
let cardsInTheGame = [];

//characters in the game
let gameCharacters = [
  "andrei",
  "homer",
  "homer",
  "marge",
  "marge",
  "bart",
  "bart",
  "lisa",
  "lisa",
  "maggie",
  "maggie",
  "snowball",
  "snowball",
  "helper",
  "helper",
];

//check card
let checkCard;

//counter click in the cards for verification;
let checkCounter = 0;

//counter user attempt
let attempt = 0;

//card pair counter
let cardPair = 0;

// timer variables;
let seconds = 0;
let minutes = 0;
let hours = 0;
let time;
let formattedTime;
const timerElement = document.getElementById("timer");

//function verification number cards
function formAmoutCards() {
  event.preventDefault();
  let form = document.getElementById("formCards");
  let numberCards = form.elements["amontCards"].value;
  amoutCards = numberCards;

  if (amoutCards <= 14 && amoutCards >= 4 && amoutCards % 2 === 0) {
    localStorage.setItem("amoutCards", amoutCards);
    location.href = "game.html";
  } else {
    let numberNotEven = document.getElementById("modalNotEven");

    numberNotEven.innerHTML = `<div id="modalNumberNotEven">
        <p> O número que você escolheu não é par ou é menor que 4 ou maior que 14</p>
        <p>Um número par qualquer é numero que ao ser dividido pelo número dois, resulta em um número inteiro 😁</p>
        <button onclick="window.location.reload()"> tentar novamente </button>
      </div>`;
  }
}

//function show cards
function showCards() {
  amoutCards = localStorage.getItem("amoutCards");
  time = setInterval(updateTimer, 1000);

  for (i = 1; i <= amoutCards; i++) {
    cardsInTheGame.push(`<div id =card${i} class="card" data-identity="${gameCharacters[i]}" onclick="turnCads('card${i}')" data-identifier="card">
    <div class="card-back">
    <img src='../images/charactersCards/simpsons${i}.png'>
    </div>
    <div class="card-front">
    </div>
</div>`);
  }

  function shuffle() {
    return Math.random() - 0.5;
  }

  cardsInTheGame.sort(shuffle);

  let aplicationCards = document.getElementById("cardsContainer");

  cardsInTheGame.map((card) => {
    aplicationCards.innerHTML += card;
  });
}

//function turn cards
function turnCads(card) {
  checkCounter++;
  attempt++;

  document.getElementById(card).classList.add("active");
  let showAttempt = document.getElementById("attempts");
  showAttempt.innerHTML = `<h4>Quantidade de tentativas ${attempt}</h4>`;

  if (checkCounter === 1) {
    checkCard = card;
  }

  if (checkCounter > 1) {
    checkCards(card);
  }
}

//function check cards
function checkCards(character) {
  let firstSelected = document.getElementById(checkCard);
  let selected = document.getElementById(character);

  if (
    selected.dataset.identity === firstSelected.dataset.identity ||
    firstSelected.dataset.identity === selected.dataset.identity
  ) {
    firstSelected.classList.add("right");
    selected.classList.add("right");
    checkCounter = 0;
    checkCard = "";
    cardPair++;
    finishedGame(cardPair);
  } else {
    let untap = document.querySelectorAll(".active");

    setTimeout(() => {
      untap.forEach((element) => {
        element.classList.remove("active");
      });
    }, 1000);

    checkCounter = 0;
    checkCard = "";
  }
}

//function finished game
function finishedGame(finished) {
  if (finished === amoutCards / 2) {
    clearInterval(time);

    setTimeout(() => {
      let modalcongratulations = document.getElementById("finishedGame");
      modalcongratulations.innerHTML = `<div class="modalCloseOrder">
    <div class="modalConfirmOrder">
      <h2> Parabéns você venceu!!!</h2>
      <div id="yourTime"></div>
      <div id="yourAttempts"></div>
      <div class="buttonContainer">
      <button onclick="restartingGame()">Reiniciar</button>
      </div>   
    </div>
  </div>`;
      let showdoAttempts = document.getElementById("yourAttempts");
      let showTime = document.getElementById("yourTime");
      showdoAttempts.textContent = `Você tentou ${attempt} vezes`;
      showTime.textContent = `Seu tempo foi de ${formattedTime}`;
    }, 1000);
  }
}

//function navigation restarting game
function restartingGame() {
  location.href = "index.html";
}

//function uptade timer
function updateTimer() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  timerElement.textContent = formattedTime;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}
