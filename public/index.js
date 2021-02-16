const wordH2 = document.getElementById('word');
const nextWord = document.querySelector('.next-word');
const groupe = document.getElementById('groupe');
const fin = document.getElementById('fin');
const ajouter = document.getElementById('ajouter');
const je = document.getElementById('je');
const tu = document.getElementById('tu');
const ill_elle = document.getElementById('ill_elle');
const nous = document.getElementById('nous');
const vous = document.getElementById('vous');
const ills_elles = document.getElementById('ills_elles');

const allItems = [fin, ajouter, je, tu, ill_elle, nous, vous, ills_elles];

init();

// TODO: User FormData to avoid all those variables

async function init() {
  const word = await API.getRandomWord();
  console.log(word);
  wordH2.textContent = word.mot;
  checkInputs(word);
}

function checkInputs(word) {
  groupe.addEventListener('keyup', function (e) {
    groupe.style.backgroundColor =
      word.groupe === parseInt(e.target.value) ? 'darkolivegreen' : 'darkred';
  });
  allItems.forEach((item) => {
    item.addEventListener('keyup', (e) => {
      const name = e.target.name;
      item.style.backgroundColor =
        word[name] === e.target.value ? 'darkolivegreen' : 'darkred';
    });
  });
}
