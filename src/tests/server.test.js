const frisby = require('frisby');

require('dotenv').config();

const rootData = require('../data/rootData.json');

const URL = `http://${process.env.HOST}:5000` || 'https://desedium-backend.herokuapp.com/';

describe('Deploy verify.', () => {
  it('the get request returns a message.', async () => {
    await frisby
      .get(URL)
      .expect('status', 200)
      .then((response) => {
        const { body } = response;
        expect(rootData).toContainEqual(JSON.parse(body));
      });
  });
});
