const { getUserFromMention } = require('../util/getUser');

module.exports = {
	run(client, message) {
        var vtncDedao = "———————/¯/) \n"
        vtncDedao += "——————/—-/ \n"
        vtncDedao += "—————-/—-/ \n"
        vtncDedao += "————--/´¯/'--'/´¯`• \n"
        vtncDedao += "———-/'/--/—-/—--/¨¯| \n"
        vtncDedao += "——--('(———- ¯~/'---') \n"
        vtncDedao += "———————-'—--/ \n"
        vtncDedao += "———-''————-•´ \n"
        vtncDedao += "———————--( \n"
        vtncDedao += "————-———--\\  \n"
        
        const split = message.content.split(/ +/);
        const args = split.slice(1);

        const member = getUserFromMention(args[0], client);
        

        if(!member)
        {
            return message.reply('Precisa mencionar alguém né meu parceiro');
        }

        vtncDedao += `\n VAI TOMAR NO CU <@${member.id}>`

        return message.channel.send(vtncDedao);
	},
    get command() {
		return {
			name: 'vtnc',
			category: '4fun',
			description: 'Manda tomar no cu',
			usage: '4fun',
		};
	},
};