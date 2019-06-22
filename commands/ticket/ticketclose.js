const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    const categoryId = "588307940851843092";
 
    if (message.channel.parentID == categoryId) {
 
        message.channel.delete();
 
    } else {
 
        message.channel.send("Por favor use este comando em um canal de ticket.");
 
    }
 
    var embedCloseTicket = new discord.RichEmbed()
        .setTitle("Oi, " + message.channel.name)
        .setDescription("Seu ticket foi marcado como **completo**. Se você quiser fazer um novo, use s!ticket")
        .setFooter("Ticket fechado");
 
    var logChannel = message.guild.channels.find("name", "📕┃s1mple bot");
    if (!logChannel) return message.channel.send("Canal inexistente.");
 
    logChannel.send(embedCloseTicket);
 
}
 

module.exports.command = {
    name: 'ticketclose',
    description: 'Fecha um ticket!',
    usage: 'ticketclose',
    category: 'ticket',
    enabled: true
}