const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.RichEmbed()
        .setColor("ff0000")
        .addField('API Ping : ', Math.floor(bot.ping) + 'ms')
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`Chamado por ${message.author.tag}`);

        
    return message.channel.send(pingembed);
        

};

module.exports.command = {
    name: 'ping',
    description: 'Mostra a lâtencia do bot',
    category: "sistema",
    usage: 's!ping',
    enabled: true
}