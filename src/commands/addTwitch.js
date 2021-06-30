const categories = require('../usersCategory');
const fetch = require('node-fetch');

module.exports = {
  async run(client, message, args) {
    const url = new URL(process.env.API_URL);
    url.pathname = '/twitchAccountLink';

    await fetch(url.toString(), {
      method: 'POST',
      headers: {
        authorization: 'Bearer test',
      },
    });
  },
  command: {
    name: 'addtwitch',
    category: categories.USER,
    description: 'Linkar conta twitch',
    usage: 'Geral',
  },
};
