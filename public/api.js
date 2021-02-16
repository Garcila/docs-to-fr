const API = {
  async getRandomWord() {
    let res;
    try {
      res = await fetch('/api/word');
    } catch (err) {
      console.log(err);
    }
    const json = await res.json();

    return json;
  },
  async addWord(url = '/api/add', data = {}) {
    console.log(data);

    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    });

    const json = await res.json();

    return json;
  },
};
