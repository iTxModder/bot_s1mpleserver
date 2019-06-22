const Discord = require('discord.js');
const botconfig = require.main.require('./botconfig.json');
const num_conv = require('number-to-words');

module.exports.run = async (bot, message, args) => {
    let output = args.join(' ');
    if (!output)
        return message.channel.send(new Discord.RichEmbed()
            .setTitle('Uso incorreto do comando.')
            .setDescription("``" + `${bot.prefix}[${this.command.usage}]` + "``")
            .setColor("#FF0000"));

    let bigtext_arr = new Array();
    for (let i = 0; i < output.length; i++) {
        let isnumber = await parseInt(output[i]);
        if (isnumber >= 0 && isnumber <= 9)
            bigtext_arr.push(`:${num_conv.toWords(output[i])}:`)
        else {
            if (output[i] !== ' ') {
                if (!output[i].match(/^[a-zA-Z]+$/)) // Regex for alphabetical entries
                    bigtext_arr.push(`:question:`)
                else
                    bigtext_arr.push(`:regional_indicator_${output[i].toLowerCase()}:`)
            } else bigtext_arr.push('   ');
        }
    }

    try {
        await message.channel.send(bigtext_arr.join(''));
        return message.delete()
    } catch (e) {
        return message.channel.send(new Discord.RichEmbed()
            .setTitle('Ocorreu um erro ao enviar a mensagem.')
            .setColor('#FF0000'));
    }


}

module.exports.command = {
    name: 'bigtext',
    description: 'Cria um big text a partir de um texto.',
    category: "outros",
    usage: 'bigtext <texto>',
    enabled: true
}