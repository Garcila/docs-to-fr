const nextWord = document.querySelector('.next-word');
const mot = document.getElementById('mot');
const classe = document.getElementById('classe');
const groupe = document.getElementById('groupe');
const fin = document.getElementById('fin');
const ajouter = document.getElementById('ajouter');
const je = document.getElementById('je');
const tu = document.getElementById('tu');
const ill_elle = document.getElementById('ill_elle');
const nous = document.getElementById('nous');
const vous = document.getElementById('vous');
const ills_elles = document.getElementById('ills_elles');

const form = document.querySelector('form');

form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(e) {
  e.preventDefault();
  let newWord = {};

  newWord.classe = classe.value.trim() || null;
  newWord.mot = mot.value.trim() || null;
  newWord.groupe = groupe.value.trim() || null;
  newWord.fin = fin.value.trim() || null;
  newWord.ajouter = ajouter.value.trim() || null;
  newWord.je = je.value.trim() || null;
  newWord.tu = tu.value.trim() || null;
  newWord.ill_elle = ill_elle.value.trim() || null;
  newWord.nous = nous.value.trim() || null;
  newWord.vous = vous.value.trim() || null;
  newWord.ills_elles = ills_elles.value.trim() || null;

  await API.addWord('/api/add', newWord);
}
