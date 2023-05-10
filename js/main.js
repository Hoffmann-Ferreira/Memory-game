//verification number cards
let amoutCards = 0;
//characters game:

//number cads in the game
let cardsInTheGame = [];
//characters in the game
let gameCharacters = ["andrei", "homer", "homer", "marge", "marge", "bart", "bart", "lisa","lisa", "maggie", "maggie", "snowball", "snowball", "helper", "helper"]

//check card = 
let checkCard;
//counter click in the cards for verification;
let checkCounter = 0;

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
  console.log("dentro", amoutCards);
}

//function show cards
function showCards() {
  amoutCards = localStorage.getItem("amoutCards");

  for(i = 1; i <= amoutCards; i++){
    cardsInTheGame.push(`<div id =card${i} class="card" data-identity="${gameCharacters[i]}" onclick="turnCads('card${i}')" data-identifier="card">
    <div class="card-back">
    <img src='../images/charactersCards/simpsons${i}.png'>
    </div>
    <div class="card-front">
    </div>
</div>`) 
  }

  // console.log("digitadas", amoutCards);
  // console.log("renderizadas",amoutCards);

  function shuffle() {
    return Math.random() - 0.5;
};

cardsInTheGame.sort(shuffle);

  let aplicationCards = document.getElementById("cardsContainer");
  aplicationCards.innerHTML = cardsInTheGame;

}

//function turn cards

function turnCads(card) {
  checkCounter++

  document.getElementById(card).classList.add("active");
  
  if(checkCounter === 1){
    checkCard = card;
  };
 
  if(checkCounter > 1) {
    checkCards(card)
  };
}

//function check cards 

function checkCards(character) {
 
  console.log("dentro", character);
  console.log("primeiro clique",  checkCard);
 
  let firstSelected = document.getElementById(checkCard);
  let selected = document.getElementById(character);
  console.log(selected.dataset.identity);

    if(selected.dataset.identity === firstSelected.dataset.identity ||firstSelected.dataset.identity === selected.dataset.identity ){
      firstSelected.classList.add("right")
   selected.classList.add("right");
   checkCounter = 0;
   checkCard = "";
   console.log("deu certo!") } else{

    let untap = document.querySelectorAll(".active")
    console.log("dentro do else");
    console.log(untap);

    setTimeout(() => {
untap.forEach( element => {
      console.log("dentro do for")
      element.classList.remove("active")
    })

    }, 1000)

    
    checkCounter = 0;
   checkCard = "";

    // document.getElementById(character).classList.remove("active");
    // document.getElementById(checkCard).classList.remove("active");
   }
  
}


// for (let i = 0; i <= amoutCards; i++) {
//   cardsInTheGame;
// console.log("verificando",i)
// }