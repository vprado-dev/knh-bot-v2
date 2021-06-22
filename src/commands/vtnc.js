const { getUserFromMention } = require('../util/getUser');
const categories = require('../usersCategory');

module.exports = {
  run(client, message, args) {
    var vtncDedao = '———————/¯/) \n';
    vtncDedao += '——————/—-/ \n';
    vtncDedao += '—————-/—-/ \n';
    vtncDedao += "————--/´¯/'--'/´¯`• \n";
    vtncDedao += "———-/'/--/—-/—--/¨¯| \n";
    vtncDedao += "——--('(———- ¯~/'---') \n";
    vtncDedao += "———————-'—--/ \n";
    vtncDedao += "———-''————-•´ \n";
    vtncDedao += '———————--( \n';
    vtncDedao += '————-———--\\  \n';

    const member = getUserFromMention(args[0], client);

    if (!member) {
      return message.reply('Precisa mencionar alguém né meu parceiro');
    }

    vtncDedao += `\n VAI TOMAR NO CU <@${member.id}>`;

    return message.channel.send(vtncDedao);
  },
  command: {
    name: 'vtnc',
    category: categories.USER,
    description: 'Manda tomar no cu',
    usage: 'Geral',
  },
};
