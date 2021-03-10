const Discord = require('discord.js');
module.exports = async client => {
	const guild = client.guilds.cache.get(process.env.GUILD_ID);

    client.user.setPresence({
        status: 'online',
        activity: {
            name: process.env.COMMAND_PREFIX+"help",
            type: "PLAYING"
        }
    });
};
