module.exports = {
  validate(client, message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES', 'MANAGE_GUILD')) {
      throw new Error('no_permissions');
    }
    if (!args[0]) {
      message.reply(
        'Lembre-se de específicar o número de mensagens que deseja excluir (Máximo 25)',
      );
      throw new Error('invalid_syntax');
    }
    if (isNaN(args[0])) {
      message.reply('O argumento precisa ser um número');
      throw new Error('invalid_syntax');
    }
    if (args[0] > 25) {
      message.reply('Não é possível deletar mais que 25 mensagens');
      throw new Error('invalid_argument');
    }
  },
  async run(client, message, args) {
    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => message.channel.bulkDelete(messages));
  },
  command: {
    name: 'clear',
    category: 'ADM',
    description: 'Exclui o número de mensagens especificadas (MAX 25)',
    usage: 'Moderadores',
  },
};
