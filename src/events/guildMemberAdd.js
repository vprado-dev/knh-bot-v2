const Discord = require('discord.js');

module.exports = async (client, member) => {
	const {username} = member.user;
	const avatarUrl = await client.users.fetch(member.user.id)
	.then((fetchedUser) => {
		return fetchedUser.avatarURL();
	});
	const boasVindasTxt = `Seja bem vindo(a) ao **Kornoha**\nAqui basicamente é tudo liberado, porém isso não é passe livre para ser chato, vamos tentar ter uma boa convivência!\nÉ nuis :call_me:`;
	
	const boasVindas = new Discord.MessageEmbed()
	.setColor('#f74b84')
	.setTitle('Boas Vindas!')
	.setAuthor(
		username,
		avatarUrl != null ? avatarUrl : 'https://cdn.discordapp.com/embed/avatars/0.png',
	)
	.setDescription(boasVindasTxt)
	.setThumbnail(avatarUrl != null ? avatarUrl : 'https://cdn.discordapp.com/embed/avatars/0.png')
	.setImage('https://media1.tenor.com/images/70b97026bfd3557d4a5c7a97423f7e4b/tenor.gif')
	.setFooter("© 2021 Kornoha ~Pradito#8853");
	

	const role = member.guild.roles.cache.find(r => r.name === "Toki");
	member.roles.add(role);

	client.users.cache
	.get(member.user.id)
	.send(boasVindas)
	.catch((e) => {
		console.error('[#ERROR]', e);
	});
};