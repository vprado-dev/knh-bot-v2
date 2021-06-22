const { getUserFromMention } = require('../util/getUser');
const categories = require('../usersCategory');

module.exports = {
  validate(client, message, args) {
    if (!message.member.hasPermission(['KICK_MEMBERS'])) {
      throw new Error('no_permissions');
    }
    if (!args[0]) {
      message.reply('Lembre-se de específicar o usuário a ser Kickado');
      throw new Error('invalid_syntax');
    }
  },
  run(client, message, args) {
    let kickMsg = `Os seguintes usuários foram kickados:\n`;
    args.map(async (value, index) => {
      let member = getUserFromMention(value, client);
      kickMsg += `-> ${member.username}\n`;

      await message.guild.member(member).kick();
    });
    return message.channel.send(kickMsg);
  },
  command: {
    name: 'kick',
    category: categories.MOD,
    description: 'Aplica um kick o usuário mencionado',
    usage: 'Moderadores',
  },
};
