//verification number cards
let amoutCards = 0;
//number cads in the game;
let cardsInTheGame = [`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
`,
`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
`,
`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
`,
`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
`,
`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
`,
`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
`,
`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
`,
`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
`,
`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
`,
`<div id="card" onclick="turnCads()">
<div class="card-back">
    <img src="../images/charactersCards/Homer_Simpson_2006.png"/>
</div>
<div class="card-front"> back</div>
</div>
` ];

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
  console.log("digitadas", amoutCards)
  amoutCards = amoutCards / 2;
  console.log("renderizadas",amoutCards);
  let aplicationCards = document.getElementById("cardsContainer");

  cardsInTheGame.slice(0, amoutCards).map((card) =>{
    return( aplicationCards.innerHTML += card + card);
  });

}

//function turn cards

function turnCads() {
  document.getElementById("card").classList.toggle("active");
}


// for (let i = 0; i <= amoutCards; i++) {
//   cardsInTheGame;
// console.log("verificando",i)
// }