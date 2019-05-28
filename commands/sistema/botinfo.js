const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    const users = bot.users.array();
    const guildMembers = message.guild.members.array();
    const channels = bot.channels.array();

    var guildTotalOnline = 0;
  		var totalOnline = 0;
  		var totalTextChannels = 0;
  		var totalVoiceChannels = 0;

  		for(var i = 0; i < guildMembers.length; i++){
  			if(guildMembers[i].presence.status === 'online'){
  				guildTotalOnline++;
  			}
  		}

  		for(var i = 0; i < users.length; i++){
  			if(users[i].presence.status === 'online'){
  				totalOnline++;
  			}
  		}
  		var nonGuildChannels = 0;
  		for(var i = 0; i < channels.length; i++){
  			if(channels[i].type === 'text')
  				totalTextChannels++
  			else if(channels[i].type === 'voice')
  				totalVoiceChannels++
  			else
  				nonGuildChannels++
  		}

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setDescription("Eu sou um Bot criado para animar o seu servidor e divertir você, por isso se tem alguma dúvida contacte um Bot Helper.")
        .setColor("ff0000")
        .setThumbnail(bicon)
        .addField("Nome do Bot", bot.user.username)
        .addField("Criado Por", "<@318149637964038144> | <@392053413741068288> | <@72720369346936842> | <@472720369346936842>")
        .addField("Criado Em", bot.user.createdAt)
        .addField("Total Membros", "`" + bot.users.size + "` Total\n`" + totalOnline + "` Online\n\n`" + message.guild.memberCount + "` este servidor\n`" + guildTotalOnline + "` online neste servidor")
        .addField("Total Canais", "`" + (bot.channels.size - nonGuildChannels)+ "` Total\n`" + message.guild.channels.size + "` neste servidor\n`" + totalTextChannels + "` Canais Texto\n`" + totalVoiceChannels + "` Canais Voz")
	.addField("Total Servidores", bot.guilds.size)
	.addField("Ping", `${bot.pings[0]}ms\``)
        .addField('P.S: O bot reinicia a cada 12 horas para garantir que tudo funciona bem. ;)')
	.setTimestamp(message.createdAt)

        return message.channel.send(botembed);
}

module.exports.command = {
    name: 'botinfo',
    description: 'Informações do Bot',
    usage: 's!botinfo',
    category: "info",
    enabled: true
}