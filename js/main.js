//verification number cards
let amoutCards = 0;

//function verification number cards
function formAmoutCards() {
  event.preventDefault();
  let form = document.getElementById("formCards");
  let numberCards = form.elements["amontCards"].value;
  amoutCards = numberCards;

  if (amoutCards <= 14 && amoutCards >= 4 && amoutCards % 2 === 0) {
    location.href = "game.html";
    localStorage.setItem('amoutCards', amoutCards)
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

function test() {
    amoutCards = localStorage.getItem('amoutCards');
    console.log("número", amoutCards );
}
