//if(message.author.id !== config.ownerID) return;
const Discord = require("discord.js");

exports.run = async (bot, message, args, color, prefix) => {
    if (message.author.id !== '472720369346936842' && message.author.id !== '318149637964038144') return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate')
        .setColor('RANDOM')
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

module.exports.command = {
    name: 'eval',
    category: 'admin',
    description: 'Executa código no bot.',
    enabled: true
}