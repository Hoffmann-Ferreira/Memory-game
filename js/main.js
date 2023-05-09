//verification number cards
let amoutCards = 0;
//characters game:

//number cads in the game;
let cardsInTheGame = [];

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
    cardsInTheGame += `<div id =card${i} class="card" onclick="turnCads('card${i}')" data-identifier="card">
    <div class="card-back" data-identifier="back-face">
    <img src='../images/charactersCards/simpsons${i}.png'>
    </div>
    <div class="card-front" data-identifier="front-face">
    </div>
</div>`
  }

  
  console.log("digitadas", amoutCards);
  console.log("renderizadas",amoutCards);
  let aplicationCards = document.getElementById("cardsContainer");
  aplicationCards.innerHTML = cardsInTheGame;

  // cardsInTheGame.slice(0, amoutCards).map((card) =>{
  //   return( aplicationCards.innerHTML += card + card);
  // });

}

//function turn cards

function turnCads(card) {

  document.getElementById(card).classList.toggle("active");

  console.log(cardsInTheGame);

}

//function check cards 

function checkCards (){
  let cont = 0;
  cont ++

  let homer = document.getElementById("card");
  let cloneHomer = document.getElementById("card3");
  console.log("contador",cont);

  if(cont == 2){
    if(homer.dataset.name === "HoHo"){
   document.getElementById("card").classList.add("right");
   console.log("deu certo!")
   
  }
  }
  
}


// for (let i = 0; i <= amoutCards; i++) {
//   cardsInTheGame;
// console.log("verificando",i)
// }