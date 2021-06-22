module.exports = {
  run: (client, message) => {
    message.channel.send(`→ Latência da API: ${Math.round(client.ws.ping)}ms.`);
  },
  command: {
    name: 'ping',
    category: 'testing',
    description: 'Comando de ping(latência)',
  },
};
