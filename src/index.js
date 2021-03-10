const Discord = require('discord.js');
const fs = require('fs-extra');
const Enmap = require('enmap');

const client = new Discord.Client({ forceFetchUsers: true });

require('dotenv').config();

client.commands = new Enmap();

const init = async() => {

    const cmdFiles = await fs.readdir('src/commands/');
    console.log(
		'[#LOG]',
		`Carregando o total de ${cmdFiles.length} comandos.`
	);
    cmdFiles.forEach(f => {
		try {
			const props = require(`./commands/${f}`);
			if (f.split('.').slice(-1)[0] !== 'js') return;
			if (props.init) {
				props.init(client);
			}
			client.commands.set(props.command.name, props);
		} catch (e) {
			console.log(`[#ERROR] Impossivel executar comando ${f}: ${e}`);
		}
	});

    const evntFiles = await fs.readdir('src/events/');
	console.log('[#LOG]', `Carregando o total de ${evntFiles.length} eventos.`);
	evntFiles.forEach(f => {
		const eventName = f.split('.')[0];

		const event = require(`./events/${f}`);

        client.on(eventName, event.bind(null,client));
	});

	client.on('error', err => console.error('[#ERROR]', err));

	client.login(process.env.AUTH_TOKEN);
};
init();

module.exports = client.commands;