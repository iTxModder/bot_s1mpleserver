const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {

    return message.channel.send(new Discord.RichEmbed()
        .setTitle(`Atualizações recentes do ${bot.user.username}.`)
        .setColor("#00FF00")
        .addField('Comando adicionado',
            `
            **${bot.prefix}shop**\nCompra itens!` ))
        //.addField('\u200B', "Para todos os comandos de música disponíveis, use ``>help music``"));
}

module.exports.command = {
    name: 'update',
    description: 'Mostra as atualizações mais recentes do bot.',
    category: "Sistema",
    usage: 'update',
    enabled: true
}

//**${botconfig.prefix}update**\nMostra as atualizações mais recentes sobre o bot.\n
//            **${botconfig.prefix}uptime**\nMostra o tempo em que o bot está ativo desde a última atualização.\n
//            **${botconfig.prefix}dep [quantia] | all**\nDeposita no banco a quantia especificada ou todas as suas moons.\n
//            **${botconfig.prefix}with [quantia] | all**\nRetira do banco a quantia especificada ou todas as suas moons.\n