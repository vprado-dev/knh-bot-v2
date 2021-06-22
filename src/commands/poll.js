const categories = require('../usersCategory');

const Discord = require('discord.js');
const emotes = [
  ':one:',
  ':two:',
  ':three:',
  ':four:',
  ':five:',
  ':six:',
  ':seven:',
  ':eight:',
  ':nine:',
  ':keycap_ten:',
];
const reactions = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
const movieRegex = new RegExp(/"(.*?)"/);

function createJson(args) {
  jsonObj = [];
  item = {};
  for (var i in args) {
    item[emotes[i]] = args[i];
  }
  jsonObj.push(item);
  return jsonObj;
}

module.exports = {
  validate(client, message, args) {
    const split = message.content.split(movieRegex);
    const argsFormated = split.slice(1).filter((e) => String(e).trim());

    if (!message.member.hasPermission('MANAGE_GUILD')) {
      throw new Error('no_permissions');
    }
    if (
      !argsFormated[0] ||
      argsFormated.length < 2 ||
      argsFormated.length > 10
    ) {
      message.reply(
        'Precisa pelo menos informar os argumentos -  (MIN: 2/ MAX: 10)',
      );
      throw new Error('invalid_syntax');
    }
  },
  async run(client, message, args) {
    const split = message.content.split(movieRegex);
    const argsFormated = split.slice(1).filter((e) => String(e).trim());

    const itens = createJson(argsFormated);

    let txt = '';

    for (var property in itens[0]) {
      txt += `\n${property} - ${itens[0][property]}\n`;
    }

    const pollEmbed = new Discord.MessageEmbed()
      .setColor('#2dea1b')
      .setAuthor(
        'Votação Iniciada',
        'https://cdn.discordapp.com/icons/273574518897770498/a3d7b53c1348fae5123c032d5374fc59.webp?size=128',
      )
      .setDescription('Vote usando os **emotes**\n' + txt);
    return message.channel.send(pollEmbed).then(function (sentMessage) {
      for (var i = 0; i < Object.keys(itens[0]).length; i++) {
        sentMessage.react(reactions[i]);
      }
    });
  },
  command: {
    name: 'poll',
    category: categories.MOD,
    description:
      'Cria uma enquete/votação por emotes - Informe Argumentos entre aspas',
    usage: 'Moderadores',
  },
};
