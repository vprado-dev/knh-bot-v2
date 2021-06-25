const fs = require('fs-extra');
const categories = require('../usersCategory');

module.exports = {
  async run(client, message, args) {
    const commandFiles = await fs.readdir('src/commands');

    let str = '';

    for (const file of commandFiles) {
      const { command } = require(`./${file}`);
      str += `**Comando:** ${process.env.COMMAND_PREFIX}${command.name} - ${command.description} - Uso: ${command.usage} \n`;
    }
    message.channel.send(str);
  },
  command: {
    name: 'help',
    category: categories.USER,
    description: 'Lista os comandos existentes',
    usage: 'Geral',
  },
};
