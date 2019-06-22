const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    const categoryId = "588307940851843092";
 
    var userName = message.author.username;

    var userDiscriminator = message.author.discriminator;
 

    var bool = false;
 
    message.guild.channels.forEach((channel) => {
 
        if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
 
            message.channel.send("Você acaba de criar um ticket.");
 
            bool = true;
 
        }
 
    });
 
    if (bool == true) return;
 
    var embedCreateTicket = new discord.RichEmbed()
        .setTitle("Oi, " + message.author.username)
        .setFooter("Canal de suporte criado.");
 
    message.channel.send(embedCreateTicket);
 
    message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => { 
 
        createdChan.setParent(categoryId).then((settedParent) => {
 
            settedParent.overwritePermissions(message.guild.roles.find('name', "@everyone"), { "READ_MESSAGES": false });
          
            settedParent.overwritePermissions(message.author, {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
          settedParent.overwritePermissions(message.guild.roles.find('name', "@🎑 Warrior "), {
 
                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                "ATTACH_FILES": true, "CONNECT": true,
                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
 
            });
 
            var embedParent = new discord.RichEmbed()
                .setTitle("Olá " + message.author.username.toString())
                .setDescription("Coloque sua questão aqui");
 
            settedParent.send(embedParent);
        }).catch(err => {
            message.channel.send("Dei BSOD.");
        });
 
    }).catch(err => {
        message.channel.send("Dei BSOD.");
    });
 
}
 

module.exports.command = {
    name: 'ticket',
    description: 'Cria um ticket para pedir ajuda!',
    usage: 'ticket',
    category: 'ticket',
    enabled: true
}