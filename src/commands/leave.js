const categories = require('../usersCategory');
require('./join');

module.exports = {
  validate(client, message, args) {
    const voiceChannel = message.member.voice.channel;

    const inSameChannel = client.voice.connections.some(
      (connection) => connection.channel.id === message.member.voice.channelID,
    );

    if (!voiceChannel) {
      message.reply('Você precisa estar conectado a um canal de voz né amigão');
      throw new Error('user_voice_channel_not_found');
    }

    if (!inSameChannel) {
      message.reply('Tem que estar no mesmo canal de voz que eu né amigão');
      throw new Error('not_in_same_channel');
    }
  },
  async run(client, message, args) {
    const voiceChannel = message.member.voice.channel;

    try {
      connection = await voiceChannel.leave();
    } catch (err) {
      message.channel.send('Não foi possível se desconectar no canal');
      throw new Error(err);
    }
  },
  command: {
    name: 'leave',
    category: categories.USER,
    description: 'Sai do seu canal de voz',
    usage: 'Usuários',
  },
};
