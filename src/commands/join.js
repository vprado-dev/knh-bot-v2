const categories = require('../usersCategory');

module.exports = {
  validate(client, message, args) {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      message.reply('Você precisa estar conectado a um canal de voz né amigão');

      throw new Error('user_voice_channel_not_found');
    }

    const permissions = voiceChannel.permissionsFor(message.client.user);

    if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
      message.reply('Preciso de permissões para falar nesse canal');
      throw new Error('no_permissions');
    }
  },
  async run(client, message, args) {
    const voiceChannel = message.member.voice.channel;

    try {
      await voiceChannel.join();
    } catch (err) {
      message.channel.send('Não foi possível se conectar no canal');
      throw new Error(err);
    }
  },
  command: {
    name: 'join',
    category: categories.USER,
    description: 'Entra no seu canal de voz',
    usage: 'Usuários',
  },
};
