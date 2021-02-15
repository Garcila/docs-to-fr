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

// const allItems = [fin, ajouter, je, tu, ill_elle, nous, vous, ills_elles];
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
// const formData = new FormData(e.target);
// const newWord = {
//   classe: formData.get('classe'),
//   mot: formData.get('mot'),
//   groupe: formData.get('groupe'),
//   fin: formData.get('fin'),
//   ajouter: formData.get('ajouter'),
//   je: formData.get('je'),
//   tu: formData.get('tu'),
//   ill_elle: formData.get('ill_elle'),
//   nous: formData.get('nous'),
//   vous: formData.get('vous'),
//   ills_elles: formData.get('ills_elles'),
// };
//   init(newWord);
// });

// async function init(newWord) {
// document.querySelector('form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const newWord = {
//     classe: formData.get('classe'),
//     mot: formData.get('mot'),
//     groupe: formData.get('groupe'),
//     fin: formData.get('fin'),
//     ajouter: formData.get('ajouter'),
//     je: formData.get('je'),
//     tu: formData.get('tu'),
//     ill_elle: formData.get('ill_elle'),
//     nous: formData.get('nous'),
//     vous: formData.get('vous'),
//     ills_elles: formData.get('ills_elles'),
//   };
// await API.addWord(newWord);
// }
// });
// const word = await API.getRandomWord();
// console.log(word);
// wordH2.textContent = word.mot;
// checkInputs(word);
// }

// function checkInputs(word) {
//   groupe.addEventListener('keyup', function (e) {
//     groupe.style.backgroundColor =
//       word.groupe === parseInt(e.target.value) ? 'green' : 'red';
//   });
//   allItems.forEach((item) => {
//     item.addEventListener('keyup', (e) => {
//       const name = e.target.name;
//       item.style.backgroundColor = word[name] === e.target.value ? 'green' : 'red';
//     });
//   });
// }
