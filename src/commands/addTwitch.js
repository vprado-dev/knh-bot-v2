const categories = require('../usersCategory');
const fetch = require('node-fetch');

module.exports = {
  async run(client, message, args) {
    await fetch(process.env.API_URL, {
      method: 'POST',
    });
  },
  command: {
    name: 'addtwitch',
    category: categories.USER,
    description: 'Linkar conta twitch',
    usage: 'Geral',
  },
};
