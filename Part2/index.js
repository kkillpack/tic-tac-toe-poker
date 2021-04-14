const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);


// const idInput = document.getElementById('idInput');
// const colorInput = document.getElementById('colorInput');

function setCard() {
  const card = document.getElementById(idInput.value);
  console.log(card);
}


// const idInput = document.getElementById('idInput');
// const colorInput = document.getElementById('colorInput');


function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;