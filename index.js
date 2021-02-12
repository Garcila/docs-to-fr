const express = require('express');
const {google} = require('googleapis');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  let word = await getWord();
  let foundWord;

  if (word) {
    foundWord = {status: 'success', data: {word: word}};
  } else {
    res.status(404);
    // should always find a word since it will be picking
    // a random word from the 'database'
    foundWord = {status: 'fail', data: {title: `Word not found`}};
  }
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(foundWord));
});

async function getWord(){
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const api = google.sheets({version: 'v4', auth});
  const response = await api.spreadsheets.values.get({
    spreadsheetId: //TODO: get the id for the spreadsheet,
    range: // TODO: string with the range to use
  });

  for(let row of response.data.values){
    // TODO: add the logic of what to get from the spreadsheet
  }
};


app.listen(PORT, () => console.log('🦻 on ${port}'));
