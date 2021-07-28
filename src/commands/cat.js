const categories = require('../usersCategory');
const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
  async run(client, message, args) {
    const url = new URL(process.env.API_URL);
    url.pathname = '/cat';

    try {
      const response = await fetch(url.toString(), {
        headers: {
          authorization: `Bearer ${process.env.KNH_API_TOKEN}`,
        },
      });

      const responseJSON = await response.json();

      const catMessage = new Discord.MessageEmbed()
        .setColor('#f74b84')
        .setTitle('Gatoooooooooooo')
        .setDescription('Aqui está o seu gatinho')
        .setImage(responseJSON[0].url)
        .setFooter('© 2021 Kornoha ~ Pradito#8853');

      return message.channel.send(catMessage);
    } catch (err) {
      console.log(`[#ERROR] Não foi possível executar o comando: ${err}`);
    }
  },
  command: {
    name: 'cat',
    category: categories.USER,
    description: 'Foto/Gif Aleatória de um gato',
    usage: 'Geral',
  },
};
