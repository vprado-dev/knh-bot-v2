const { getUserFromMention } = require('../util/getUser')

module.exports = {
    validate(client, message, args){
        if(!message.member.hasPermission(['ban_MEMBERS'])){
            throw new Error('no_permissions');
        }
        if(!args[0]){
            message.reply('Lembre-se de específicar o usuário a ser banado');
            throw new Error('invalid_syntax');
        }
    },
    async run(client, message, args){
        let banMsg = `Os seguintes usuários foram banidos:\n`;
        args.map(async (value, index) =>{
            let member = getUserFromMention(value, client);
            banMsg+= `-> ${member.username}\n`;
            
            await message.guild.member(member).ban();
        });
        return message.channel.send(banMsg);
    },
    get command(){
        return {
			name: 'ban',
			category: 'ADM',
			description: 'Aplica um ban no usuário mencionado',
			usage: 'Moderadores',
		};
    }

}