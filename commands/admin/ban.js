const Discord = require("discord.js");
const botconfig = require.main.require("./botconfig.json");

module.exports.run = async (bot, message, args) => {
    let ban_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let ban_reason = args.join(" ").slice(args[0].length + 1); // slices the length of the ID and the space after it

    const report_file = require('./report.js');
    if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS'))
        return message.channel.send(new Discord.RichEmbed()
            .setTitle('<:errado:580518832939204628> **|** Você não tem permissão para banir membros desse servidor.')
            .setDescription("<:Ferc:559356192774684694> Ao invés disso, use ``" + `${botconfig.prefix}${report_file.help.name} [${report_file.help.arg.join('] [')}]` + "``")
            .setColor('#FF0000'));

    if (!ban_user)
        return message.channel.send(Discord.RichEmbed()
            .setTitle(`<:errado:580518832939204628> **|** Usuário não encontrado no servidor **${message.guild.name}**.`)
            .setDescription('<:Ferc:559356192774684694> Use **@** para identificar o usuário corretamente.')
            .setColor("#FF0000"));

    if (ban_user.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(new Discord.RichEmbed()
            .setTitle(`<:errado:580518832939204628> **|**  **${ban_user.displayName}** é administrador desse servidor e não pode ser expulso.`)
            .setColor("#FF0000"));
    }

    if (ban_reason === "")
        return message.channel.send(Discord.RichEmbed()
            .setTitle("<:errado:580518832939204628> **|** Uso incorreto do comando")
            .setColor("#FF0000")
            .addField("<:Ferc:559356192774684694> Você deve adicionar o motivo pelo qual está banindo esse usuário",
                "**Tente usar: **``" + `${botconfig.prefix}${this.help.name} [@usuário] [motivo]` +
                "``**\nOu usar: **``" + `${botconfig.prefix}${this.help.name} ban` +
                "``**\npara informações detalhadas sobre o comando**"));
    else {
        try {
            await message.guild.member(ban_user).ban(ban_reason);
        } catch (e) {
            return message.channel.send(new Discord.RichEmbed()
                .setTitle(`<:errado:580518832939204628> **|**  Permissões insuficientes para banir **${ban_user.displayName}**.`)
                .setDescription("<:Ferc:559356192774684694> Ao invés disso, use ``" + `${botconfig.prefix}${report_file.help.name} [${report_file.help.arg.join('] [')}]` + "``")
                .setColor('#FF0000'));
        }

        return message.channel.send(Discord.RichEmbed()
            .addField(`<:users:580523695865462797> Usuário **${ban_user.displayName}** banido.`, `| ${ban_user} | ID: ${ban_user.id}`)
            .setThumbnail(ban_user.user.displayAvatarURL)
            .setColor("#00FF00")
            .addField("<:documento:580524643819978772> **|** Motivo", ban_reason)
            .setFooter(`<a:moderacao:580518832259727371> | Banido por ${message.author.username}`));
    }
}
module.exports.command = {
    name: 'ban',
    category: 'admin',
    description: 'Bane um utilizador',
    enabled: true
}