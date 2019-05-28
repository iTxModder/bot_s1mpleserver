const Discord = require("discord.js");
const botconfig = require.main.require('./botconfig.json');

module.exports.run = async (bot, message, args) => {
    const report_file = require('./report.js');
    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) {
        return message.channel.send(new Discord.RichEmbed()
            .setTitle('<:errado:580518832939204628> **|** Você não tem permissão para expulsar membros desse servidor.')
            .setDescription("<:Ferc:559356192774684694> **|** Ao invés disso, use ``" + `${botconfig.prefix}${report_file.help.name} [${report_file.help.arg.join('] [')}]` + "``")
            .setColor('#FF0000'));
    }

    let kick_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let kick_reason = args.join(" ").slice(args[0].length + 1);

    if (!kick_user)
        return message.channel.send(new Discord.RichEmbed()
            .setDescription(`<:errado:580518832939204628> **|** Usuário não encontrado no servidor **${message.guild.name}**`)
            .setDescription('<:Ferc:559356192774684694> **|** Use **@** para identificar o usuário corretamente.')
            .setColor("#FF0000"));

    if (kick_user.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(new Discord.RichEmbed()
            .setTitle(`<:errado:580518832939204628> **|** **${kick_user.displayName}** é administrador desse servidor e não pode ser expulso.`)
            .setColor("#FF0000"));
    }

    if (kick_reason === "") {
        try {
            await message.guild.member(kick_user).kick();
        } catch (e) {
            return message.channel.send(new Discord.RichEmbed()
                .setTitle(`<:errado:580518832939204628> **|** Permissões insuficientes para expulsar **${kick_user.displayName}**.`)
                .setDescription("<:Ferc:559356192774684694> **|** Ao invés disso, use ``" + `${botconfig.prefix}${report_file.help.name} [${report_file.help.arg.join('] [')}]` + "``")
                .setColor('#FF0000'));
        }

        return message.channel.send(new Discord.RichEmbed()
            .addField("<:users:580523695865462797> Usuário foi expulso do servidor", `${kick_user}`)
            .setThumbnail(kick_user.user.displayAvatarURL)
            .setFooter(`<a:moderacao:580518832259727371> | Expulso por ${message.author.username}`, message.author.displayAvatarURL)
            .setColor("#00FF00"));
    } else {
        try {
            await message.guild.member(kick_user).kick(kick_reason);
        } catch (e) {
            return message.channel.send(new Discord.RichEmbed()
                .setTitle(`<:errado:580518832939204628> **|** Permissões insuficientes para expulsar **${kick_user.displayName}**.`)
                .setDescription("<:Ferc:559356192774684694> Ao invés disso, use ``" + `${botconfig.prefix}${report_file.help.name} [${report_file.help.arg.join('] [')}]` + "``")
                .setColor('#FF0000'));
        }

        return message.channel.send(new Discord.RichEmbed()
            .addField("<:users:580523695865462797> Usuário foi expulso do servidor", `${kick_user}`)
            .addField("<:documento:580524643819978772> **|** Motivo", `${kick_reason}`)
            .setThumbnail(kick_user.user.displayAvatarURL)
            .setFooter(`<a:moderacao:580518832259727371> | Expulso por ${message.author.username}`, message.author.displayAvatarURL)
            .setColor("#00FF00"));
    }



}

module.exports.command = {
    name: 'kick',
    category: 'admin',
    description: 'Kicka um usuário',
    enabled: true
}