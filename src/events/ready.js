const Discord = require('discord.js');
module.exports = async client => {
	const guild = client.guilds.cache.get(process.env.GUILD_ID);

    client.user.setPresence({
        status: 'online',
        activity: {
            name: "k!help",
            type: "PLAYING"
        }
    });
};
