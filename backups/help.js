//module.exports = {
//  run: (client, message, args) => {
 
//   let embed = {
//      color: 0xB1103C,
//      title: 'Lista de Comandos S1mple',     
//      description: '**Esses são todos os comandos disponíveis do S1mple**.',
//      footer: {
//        text: 'Não se esqueça de votar no S1mple ajudando nossa divulgação.'
//      },
//      fields: []
//    }

   
//    client.commands.forEach(command => {
//      embed.fields.push(
//        {
//        name: `**${command.help.name}**`,
//        value: `**Descrição**: ${command.help.description}\n**Como Usar**: ${command.help.usage}`
//        }
//      )
//    })

 
//    message.author.send({ embed: embed })
//      .then(() => message.react(':white_check_mark:'))
//      .catch(() => message.reply('Enviei na sua DM. :envelope_with_arrow:'))
//  }
//}

const Discord = require("discord.js");

exports.run = async (bot, message, args, tools, con) => {
    let help = new Discord.RichEmbed()
        .setAuthor("Lista de comandos")
        .setColor(0xff0000)
        .addField("Economia", `${bot.commands.filter(cmd => cmd.command.category === 'economia').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Diversão", `${bot.commands.filter(cmd => cmd.command.category === 'fun').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Sistema", `${bot.commands.filter(cmd => cmd.command.category === 'sistema').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Outros", `${bot.commands.filter(cmd => cmd.command.category === 'outros').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Info", `${bot.commands.filter(cmd => cmd.command.category === 'info').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true)
        .addField("Leveling", `${bot.commands.filter(cmd => cmd.command.category === 'leveling').map(cmd => `\`${cmd.command.name}\``).join(", ")}`, true);
    message.channel.send(help)
}


 module.exports.command = {
    name: 'help',
    description: 'Todos os comandos disponiveis',
    category: "sistema",
    usage: 's!help',
    enabled: true
}