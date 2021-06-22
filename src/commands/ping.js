const categories = require('../usersCategory');

module.exports = {
  run: (client, message) => {
    message.channel.send(`→ Latência da API: ${Math.round(client.ws.ping)}ms.`);
  },
  command: {
    name: 'ping',
    category: categories.DEV,
    description: 'Comando de ping(latência)',
    usage: 'Desenvolvedor/Geral',
  },
};
