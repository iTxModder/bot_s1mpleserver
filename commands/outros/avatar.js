const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let user_avatar = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	let sv_icon = args.join(" ");
	const avatar_embed = new Discord.RichEmbed()
		.setFooter(`Requisitado por ${message.author.username}`, message.author.displayAvatarURL);

	if (!user_avatar) {
		if (sv_icon === 'server') {
			return message.channel.send(avatar_embed.setTitle(`<:Ferc:559356192774684694> Ícone do servidor ${message.guild.name}`)
				.setImage(message.guild.iconURL)
				.setColor("#00FF00"));
		}
		return message.channel.send(avatar_embed.setTitle(`<:errado:580518832939204628> Você deve especificar um membro do ` +
				`**${message.guild.name}**`)
			.setColor("#FF0000"));
	}



	return message.channel.send(avatar_embed.setTitle(`<:Ferc:559356192774684694> Avatar de **${user_avatar.user.username}**`)
		.setImage(user_avatar.user.displayAvatarURL)
		.setColor("#00FF00"));
}

module.exports.command = {
    name: 'avatar',
    description: 'Vê o avatar de alguém',
    usage: 's!avatar <usuário>',
    category: "outros",
    enabled: true
}